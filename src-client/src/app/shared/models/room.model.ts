import { UserForBox } from './user-for-box.model';
import { ChatMessageModel } from './chat-message.model';

export class RoomModel {
  // tslint:disable-next-line:variable-name
  _id: string;
  name: string;
  slug: string;
  logo: string;
  description: string;
  users: UserForBox[];
  messages: ChatMessageModel[];

  constructor(input: any) {
    this._id = input._id;
    this.name = input.name;
    this.slug = input.slug;
    this.logo = input.logo;
    this.description = input.description;
    this.users = input.users;
    this.messages = input.messages;
  }
}
