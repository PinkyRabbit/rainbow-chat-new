import {
  Controller,
  Post,
  Body,
  UseGuards,
  Request,
  Get,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOkResponse,
  ApiOperation,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

import { JwtAuthGuard } from 'guards/jwt-auth.guard';

import { AuthService } from './auth.service';
import { AuthRegisterDTO } from './dto/auth.register.dto';
import { AuthRegisterValidationPipe } from './pipes/auth.register.validation.pipe';
import { AuthLoginDTO } from './dto/auth.login.dto';

@Controller('auth')
@ApiTags('Authorization')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/sign-up')
  @ApiOperation({ summary: 'User register' })
  @ApiOkResponse({ description: 'user.created' })
  async signUpNewUser(
    @Body(AuthRegisterValidationPipe) newUser: AuthRegisterDTO,
  ) {
    console.log(newUser);
    return await this.authService.signUpNewUser(newUser);
  }

  @Post('/sign-in')
  @UseGuards(AuthGuard('local'))
  @ApiOperation({ summary: 'User login' })
  // @ApiOkResponse({ description: 'user.loggedIn' })
  // @ApiBadRequestResponse({ type: ErrorDTO })
  async signIn(
    @Body(AuthRegisterValidationPipe) loginDto: AuthLoginDTO,
    @Request() req,
  ) {
    const { rememberMe } = loginDto;
    return await this.authService.signIn(req.user, rememberMe);
  }

  @Get('me')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Return own user object or unauthorized error' })
  // @ApiOkResponse({ type: UserWithInfoAndStationsDTO })
  getCurrentUser(@Request() req) {
    // const { user: userId } = req;
    console.log(req.user);
    console.log(req.headers);
    return true;
  }
}
