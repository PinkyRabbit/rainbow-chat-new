import { Module } from '@nestjs/common';

import { S3UserImagesService } from './s3/s3.user-images.service';

@Module({
  providers: [S3UserImagesService],
  exports: [S3UserImagesService],
})
export class AwsModule {}
