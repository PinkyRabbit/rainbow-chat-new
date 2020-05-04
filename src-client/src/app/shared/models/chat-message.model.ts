import { UserModel } from './user.model';

export class ChatMessageModel {
  // tslint:disable-next-line: variable-name
  _id: string;
  message: string;
  date: string;
  isBanned: boolean;
  from: UserModel;
  to: UserModel[];
}
