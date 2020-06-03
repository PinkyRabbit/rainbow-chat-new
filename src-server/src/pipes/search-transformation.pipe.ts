import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class SearchTransformationPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    let result = value;

    if (metadata.type === 'query') {
      const testObject = metadata.data ? { [metadata.data]: value } : value;
      result = this.transformAndPreventSearch(testObject);
    }

    return result;
  }

  transformAndPreventSearch(testObject) {
    const search = testObject.s.toString().trim();
    if (search) {
      testObject.s = this.escapeRegExp(search);
    }
    return testObject;
  }

  escapeRegExp(str: string) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  }
}
