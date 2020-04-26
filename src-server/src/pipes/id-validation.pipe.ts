import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { ObjectID } from 'mongodb';

@Injectable()
export class IdValidationPipe implements PipeTransform {
  private readonly validObjectiNames = ['userId'];

  async transform(value: any, metadata: ArgumentMetadata) {
    let result = value;

    if (metadata.type === 'param') {
      const testObject = metadata.data ? { [metadata.data]: value } : value;
      result = this.validateId(testObject);
    }

    return result;
  }

  validateId(testObject) {
    Object.entries(testObject).forEach(([key, value]) => {
      if (
        this.validObjectiNames.includes(key) &&
        (typeof value !== 'string' || !ObjectID.isValid(value))
      ) {
        throw new BadRequestException(`params.${key}`);
      }
    });

    return testObject;
  }
}
