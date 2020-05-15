import { Module } from '@nestjs/common';

import { AwsModule } from 'services/aws/aws.module';
import { DatabaseModule } from 'database/database.module';

import { UserUploadController } from './controllers/user-upload.controller';
import { UserSearchController } from './controllers/user-search.controller';
import { UserUploadService } from './services/user-upload.service';
import { UserSearchService } from './services/user-search.service';

@Module({
  imports: [DatabaseModule, AwsModule],
  controllers: [UserUploadController, UserSearchController],
  providers: [UserUploadService, UserSearchService],
})
export class UserModule {}
