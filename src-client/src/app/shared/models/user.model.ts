export class UserModel {
  // tslint:disable-next-line: variable-name
  _id: string;
  firstName: string;
  username: string;
  nameColor: string;
  nameFont: string;
  textColor: string;
  textFont: string;
  avatar: string;

  constructor(input: any) {
    this._id = input._id;
    this.firstName = input.firstName;
    this.username = input.username;
    this.nameColor = input.nameColor;
    this.nameFont = input.nameFont;
    this.textColor = input.textColor;
    this.textFont = input.textFont;
    this.avatar = input.avatar;
  }
}
