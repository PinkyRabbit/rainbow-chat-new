import { Module } from '@nestjs/common';

import { AwsModule } from 'services/aws/aws.module';

import { UserUploadController } from './upload/user-upload.controller';
import { UserUploadService } from './upload/user-upload.service';

@Module({
  imports: [AwsModule],
  controllers: [UserUploadController],
  providers: [UserUploadService],
})
export class UserModule {}
