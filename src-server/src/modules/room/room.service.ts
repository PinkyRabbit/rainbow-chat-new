import { Injectable, NotFoundException } from '@nestjs/common';
import { RedisService } from 'nestjs-redis';
import { InjectModel } from '@nestjs/mongoose';
import { ObjectID } from 'mongodb';
import { Model } from 'mongoose';

import { UserModel } from 'database/schemas/user/user.model';
import { MessageModel } from 'database/schemas/message/message.model';
import { SocketIoGateway } from 'socket-io/socket-io.gateway';

interface NewMessage {
  message: string;
  usersInMessage: string[];
}

@Injectable()
export class RoomService {
  constructor(
    private readonly redisService: RedisService,
    private readonly socketIoGateway: SocketIoGateway,
    @InjectModel('User')
    private userModel: Model<UserModel>,
    @InjectModel('Message')
    private messageModel: Model<MessageModel>,
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
    // await this.redisService.getClient().del(`${redisRoom}`);
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

  async sendMessage(
    userId: string,
    roomSlug: string,
    newMessageObject: NewMessage,
  ) {
    const message = {
      roomSlug,
      user: this.toObjectId(userId),
      message: newMessageObject.message,
      usersInMessage: newMessageObject.usersInMessage.map(userId =>
        this.toObjectId(userId),
      ),
    };
    const newMessage = await this.messageModel.create(message);
    // const messageInstance = new this.messageModel();
    // messageInstance.sta
    // const getMessageForResponse = await this.messageModel.statics.someStatic()
    const messageForResponse = await this.messageModel
      .findOne({ _id: newMessage._id })
      .populate(['user', 'usersInMessage']);
    // io.to('some room').emit('some event');

    const { roomSlug: excessSlugProp, ...messageObject } = messageForResponse;
    this.socketIoGateway.sendToRoom(`${roomSlug}`, messageObject);

    /*
      .then(message => ({
        room: `message.room`,
        user: message.user
        // readonly room: Schema.Types.ObjectId;
        // readonly user: Schema.Types.ObjectId;
        // readonly message: string;
        // readonly usersInMessage: Schema.Types.ObjectId[];
      }))
    */

    // console.log(getMessageForResponse);
    // send message to database
    // add message to redis
    // const { room, ...messageObjectWithUsers } = getMessageForResponse;
    this.redisService
      .getClient()
      .lpush(`room:${roomSlug}`, JSON.stringify(messageObject));
    // clear redis if needed
    // emit to socket
    return true;
  }

  private toObjectId(value) {
    return new ObjectID(value);
  }
}
