import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { AuthRegisterDTO } from './dto/auth.register.dto';
import { AuthRegisterValidationPipe } from './pipes/auth.register.validation.pipe';

@Controller('auth')
@ApiTags('Authorization')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/sign-up')
  @ApiOkResponse({ description: 'user.created' })
  async signUpNewUser(
    @Body(AuthRegisterValidationPipe) newUser: AuthRegisterDTO,
  ) {
    return await this.authService.signUpNewUser(newUser);
  }
}
