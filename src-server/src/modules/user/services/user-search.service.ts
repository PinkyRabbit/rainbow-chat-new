import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel } from 'database/schemas/user/user.model';

@Injectable()
export class UserSearchService {
  constructor(
    @InjectModel('User')
    private userModel: Model<UserModel>,
  ) {}

  async isUsernameExists(search): Promise<boolean> {
    const searchRegexp = new RegExp(`^${search}$`);
    const user = await this.userModel.findOne({
      username: { $regex: searchRegexp },
    });
    return !!user;
  }
}
