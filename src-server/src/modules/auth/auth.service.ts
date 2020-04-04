import { Injectable, Inject, BadRequestException } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import databaseConstants from 'database/database.constants';
import { UserModel } from 'database/schemas/user/user.model';

@Injectable()
export class AuthService {
  constructor(
    // private jwtService: JwtService,
    @Inject(databaseConstants.repositoryNameFor.User)
    private userModel: Model<UserModel>,
  ) {}

  async signUpNewUser(newUser) {
    const existedUser = await this.userModel.findOne({ email: newUser.email });
    if (existedUser) {
      throw new BadRequestException('user.alreadyExists');
    }
    console.log(newUser);
    return await this.userModel.create(newUser);
  }

  // async validateUser(username: string, pass: string): Promise<any> {
  //   const user = await this.usersService.findOne(username);
  //   if (user && user.password === pass) {
  //     const { password, ...result } = user;
  //     return result;
  //   }
  //   return null;
  // }

  // async login(user: any) {
  //   const payload = { username: user.username, sub: user.userId };
  //   return {
  //     access_token: this.jwtService.sign(payload),
  //   };
  // }
}
