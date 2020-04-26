import { Module } from '@nestjs/common';
import { RedisModule } from 'nestjs-redis';

import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    // common
    RedisModule.register({
      url: process.env.REDIS_URL,
    }),
    DatabaseModule,
    // routes
    AuthModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
