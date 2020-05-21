import { Injectable, NotFoundException } from '@nestjs/common';
import { RedisService } from 'nestjs-redis';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { UserModel } from 'database/schemas/user/user.model';

@Injectable()
export class RoomService {
  constructor(
    private readonly redisService: RedisService,
    @InjectModel('User')
    private userModel: Model<UserModel>,
  ) {}

  getRandomRoom() {
    // getRandomRoom(userId) {
    // get user tags
    // if tags not exists - get location
    // if no location - pick most popular

    // return {
    //   _id: ,
    //   name: 'Чатик',
    //   slug: 'main',
    //   logo: 'http://file.mobilmusic.ru/b7/3f/84/1411287-128.jpg',
    //   description:
    //     'Главный чат сайта. Комнаты доробатываются и скоро появятся, а, пока что, так.',
    // };

    return { roomId: 'main-hardcoded' };
  }

  async joinRoom(userId: string, roomId: string) {
    if (roomId !== 'main-hardcoded') {
      throw new NotFoundException();
    }
    // pick room by id (hardcoded)
    const room = {
      _id: 'main-hardcoded',
      name: 'Чатик',
      slug: 'main-room',
      logo: 'http://file.mobilmusic.ru/b7/3f/84/1411287-128.jpg',
      description:
        'Главный чат сайта. Комнаты доробатываются и скоро появятся, а, пока что, так.',
    };
    const redisRoom = `room:${room._id.toString()}`;
    // add user to room users
    const fullUser = await this.userModel.findOne({ _id: userId });
    const user = await fullUser.extractUserForBox();
    await this.redisService.getClient().del(`${redisRoom}`);
    await this.redisService
      .getClient()
      .sadd(`${redisRoom}`, JSON.stringify(user));
    // get users list
    const users = await this.redisService
      .getClient()
      .smembers(redisRoom)
      .then(users => users.map(user => JSON.parse(user.toString())));

    return {
      room,
      users,
    };
  }
}
