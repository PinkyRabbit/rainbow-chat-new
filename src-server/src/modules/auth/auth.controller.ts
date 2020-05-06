import {
  Controller,
  Post,
  Body,
  UseGuards,
  Request,
  Get,
  UsePipes,
  Query,
  Param,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOkResponse,
  ApiOperation,
  ApiBearerAuth,
  ApiQuery,
  ApiParam,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

import { JwtAuthGuard } from 'guards/jwt-auth.guard';

import { AuthService } from './auth.service';
import { AuthRegisterValidationPipe } from './pipes/auth.register.validation.pipe';
import { AuthLoginDTO } from './dto/auth.login.dto';
import { IdValidationPipe } from 'pipes/id-validation.pipe';
import { AuthRefreshDTO } from './dto/auth.refresh.dto';
import { AuthRefreshValidationPipe } from './pipes/auth.refresh.validation.pipe';
import { swQrememberMe } from 'util/swagger/constants.query';
import { swPuserId } from 'util/swagger/constants.params';
import { TokenResponse } from 'models';
import { AuthTokenResponseDTO } from './dto/auth.token-response.dto';
import { AuthRegisterDTO } from './dto/auth.register.dto';
import { stringToResponseObject } from 'util/helpers/string-to-response-object';

@Controller('auth')
@ApiTags('Authorization')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'User login' })
  @ApiOkResponse({ type: AuthTokenResponseDTO })
  @Post('/login')
  @UseGuards(AuthGuard('local'))
  async login(
    @Body(AuthRegisterValidationPipe) loginDto: AuthLoginDTO,
    @Request() req,
  ): Promise<TokenResponse> {
    const { user: userId } = req;
    const { rememberMe } = loginDto;

    return await this.authService.login(userId, rememberMe);
  }

  @ApiOperation({ summary: 'Refresh user`s token' })
  @ApiQuery(swQrememberMe)
  @ApiParam(swPuserId)
  @ApiOkResponse({ type: AuthTokenResponseDTO })
  @Post('/refresh/:userId')
  @UsePipes(IdValidationPipe)
  async refreshToken(
    @Param() params,
    @Query() query,
    @Body(AuthRefreshValidationPipe) body: AuthRefreshDTO,
  ): Promise<TokenResponse> {
    const { userId } = params;
    const { refreshToken } = body;
    const rememberMe = query.rememberMe ? query.rememberMe === 'true' : false;
    return await this.authService.refresh(refreshToken, userId, rememberMe);
  }

  @ApiOperation({ summary: 'Return own user id or unauthorized error' })
  @ApiBearerAuth()
  @Get('/me')
  @UseGuards(JwtAuthGuard)
  async getCurrentUser(@Request() req) {
    return await this.authService.getMe(req.user);
  }

  @ApiOperation({ summary: 'User logout' })
  @ApiOkResponse({ description: 'user.logout' })
  @Post('logout')
  async logout(@Body(AuthRefreshValidationPipe) body: AuthRefreshDTO) {
    const { refreshToken } = body;
    await this.authService.revokeRefreshToken(refreshToken);
    return stringToResponseObject('user.logout');
  }

  @ApiOperation({ summary: 'User register' })
  @ApiOkResponse({ description: 'user.created' })
  @Post('/register')
  async register(@Body(AuthRegisterValidationPipe) newUser: AuthRegisterDTO) {
    await this.authService.register(newUser);
    return stringToResponseObject('user.created');
  }
}
