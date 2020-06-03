import { UserForBox } from './user-for-box';

export interface UserForMessage {
  readonly user: UserForBox;
  readonly textFont: string;
  readonly textColor: string;
}
