import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RedisService } from 'nestjs-redis';
import * as uuid from 'uuid';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { UserModel } from 'database/schemas/user/user.model';
import { TokenResponse } from 'models';

@Injectable()
export class AuthService {
  private readonly isNotProdMode = process.env.NODE_ENV !== 'production';
  static REFRESH_TOKEN_PREFIX = 'refresh ';

  constructor(
    private readonly jwtService: JwtService,
    private readonly redisService: RedisService,
    @InjectModel('User')
    private userModel: Model<UserModel>,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userModel
      .findOne({
        username,
      })
      .select('+password');
    if (!user) {
      return null;
    }

    try {
      await user.comparePassword(password);
    } catch (err) {
      console.log(err);
      return null;
    }

    return user._id.toString();
  }

  async login(_id: string, rememberMe = false): Promise<TokenResponse> {
    return {
      token: this.jwtService.sign({ _id, rememberMe }),
      refreshToken: await this.createRefreshToken(_id, rememberMe),
    };
  }

  async createRefreshToken(_id: string, rememberMe = false): Promise<string> {
    const refreshToken = uuid.v4();
    if (this.isNotProdMode || !rememberMe) {
      const oneHourInSeconds = 60 * 60;
      await this.redisService
        .getClient()
        .set(
          AuthService.REFRESH_TOKEN_PREFIX + refreshToken,
          _id,
          'EX',
          oneHourInSeconds,
        );
    } else {
      const thirtyDaysInSeconds = 30 * 24 * 60 * 60;
      await this.redisService
        .getClient()
        .set(
          AuthService.REFRESH_TOKEN_PREFIX + refreshToken,
          _id,
          'EX',
          thirtyDaysInSeconds,
        );
    }

    return refreshToken;
  }

  async revokeRefreshToken(token: string): Promise<void> {
    await this.redisService
      .getClient()
      .del(AuthService.REFRESH_TOKEN_PREFIX + token);
  }

  async refresh(
    token: string,
    userId: string,
    rememberMe: boolean,
  ): Promise<TokenResponse> {
    const savedUserId = await this.redisService
      .getClient()
      .get(AuthService.REFRESH_TOKEN_PREFIX + token);

    if (!savedUserId || savedUserId !== userId) {
      throw new UnauthorizedException();
    }

    await this.revokeRefreshToken(token);
    return await this.login(userId, rememberMe);
  }

  async register(userObject) {
    const { passwordConfirmation, year, ...newUser } = userObject;

    if (newUser.password !== passwordConfirmation) {
      throw new BadRequestException('user.passwordConfirmation');
    }

    const existedUser = await this.userModel.findOne({ email: newUser.email });
    if (existedUser) {
      throw new BadRequestException('user.alreadyExists');
    }

    await this.userModel.create(newUser);
    return 'user.created';
  }

  async getMe({ _id }) {
    const selectedFields = [
      'username',
      'statusText',
      'nameColor',
      'nameFont',
      'textColor',
      'textFont',
      'soundNotification',
      'soundVolume',
      'selfTargetMessageTypes',
      'minutesOnline',
    ].join(' ');
    const user = await this.userModel.findById(_id).select(selectedFields);
    return {
      user,
      chats: [],
    };
  }
}
