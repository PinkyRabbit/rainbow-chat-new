import { Module } from '@nestjs/common';

import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [AuthModule, DatabaseModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
