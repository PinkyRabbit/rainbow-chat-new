import { Module } from '@nestjs/common';
// import { PassportModule } from '@nestjs/passport';
// import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { DatabaseModule } from 'database/database.module';

@Module({
  imports: [
    DatabaseModule,
    // PassportModule,
    // JwtModule.register({
    //   secret: 'super-secret',
    //   signOptions: { expiresIn: '60s' },
    // }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
