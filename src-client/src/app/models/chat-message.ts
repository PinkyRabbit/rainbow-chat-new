import { User } from './user';

export class ChatMessage {
  // tslint:disable-next-line: variable-name
  _id: string;
  message: string;
  date: string;
  isBanned: boolean;
  from: User;
  to: User[];
}
