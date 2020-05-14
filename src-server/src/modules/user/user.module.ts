import { Module } from '@nestjs/common';

import { AwsModule } from 'services/aws/aws.module';

import { UserUploadController } from './controllers/user-upload.controller';
import { UserUploadService } from './services/user-upload.service';

@Module({
  imports: [AwsModule],
  controllers: [UserUploadController],
  providers: [UserUploadService],
})
export class UserModule {}
