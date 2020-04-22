export class AuthUser {
  // tslint:disable-next-line: variable-name
  _id: string;
  username: string;

  constructor(data: Partial<AuthUser>) {
    this.username = data.username;
    this._id = data._id;
  }
}
