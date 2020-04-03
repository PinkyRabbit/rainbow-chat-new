import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

type CallbackFunction = () => void;

@Injectable()
export class DefaultValidationPipe implements PipeTransform {
  validationPrefix?: string;

  async transform(value: any, metadata: ArgumentMetadata) {
    if (!metadata.metatype || !this.toValidate(metadata.metatype)) {
      return value;
    }

    // transform deserialized JS object from request into typed object that can be validated based on the type-validation decorators in the DTO
    const object = plainToClass(metadata.metatype, value);
    const errors = await validate(object, {
      whitelist: true,
      forbidNonWhitelisted: true,
    });

    if (errors.length > 0) {
      const prefix = this.validationPrefix ? `${this.validationPrefix}.` : '';
      throw new BadRequestException(errors.map(e => `${prefix}${e.property}`));
    }
    return object;
  }

  // bypass validation for native JS types which are schemaless
  private toValidate(metatype: any): boolean {
    const types: CallbackFunction[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
