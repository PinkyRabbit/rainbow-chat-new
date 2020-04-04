import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { AuthRegisterDTO } from './dto/auth.register.dto';
import { AuthRegisterValidationPipe } from './pipes/auth.register.validation.pipe';

@Controller('auth')
@ApiTags('Rating')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/sign-up')
  async signUpNewUser(
    @Body(AuthRegisterValidationPipe) newUser: AuthRegisterDTO,
  ) {
    return await this.authService.signUpNewUser(newUser);
  }
}
