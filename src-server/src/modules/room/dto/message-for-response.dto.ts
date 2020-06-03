import { UserForBox } from 'models/user-for-box';

export interface MessageForResponseDTO {
  readonly from: UserForBox;
  readonly message: string;
  readonly textColor: string;
  readonly textFont: string;
  readonly room: string;
  readonly usersInMessage: UserForBox[];
}
