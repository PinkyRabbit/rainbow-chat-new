import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';

import databaseConstants from 'database/database.constants';
import { UserModel } from 'database/schemas/user/user.model';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @Inject(databaseConstants.repositoryNameFor.User)
    private userModel: Model<UserModel>,
  ) {}

  async signUpNewUser(userObject) {
    const { passwordConfirmation, ...newUser } = userObject;

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

  private generateToken(payload: any): string {
    return this.jwtService.sign(payload);
  }

  private generateRefreshToken(
    userId: string,
    rememberThisUser = false,
  ): string {
    const jwtRefreshToken = { _id: userId };
    const expiresIn = rememberThisUser ? '1y' : '24h';
    return this.jwtService.sign(jwtRefreshToken, { expiresIn });
  }

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

    // eslint-disable-next-line
    const { password: excessPassword, ...result } = user.toJSON();
    return result;
  }

  async signIn(user: any, rememberThisUser = false) {
    const payload = {
      username: user.username,
      sub: user._id.toString(),
    };
    return {
      // eslint-disable-next-line
      access_token: this.generateToken(payload),
      // eslint-disable-next-line
      refresh_token: this.generateRefreshToken(payload.sub, rememberThisUser),
    };
  }
}
