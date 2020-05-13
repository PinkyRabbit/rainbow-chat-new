enum Sex {
  male = 0,
  female = 1,
}

enum Roles {
  'super_admin',
  'admin',
  'moderator',
  'user',
}

export class UserForBox {
  // tslint:disable-next-line:variable-name
  readonly _id: string;
  readonly username: string;
  role: Roles;
  readonly avatar: string;
  readonly country: string;
  readonly city: string;
  sex: Sex;
  readonly statusText: string;
  readonly nameColor: string;
  readonly nameFont: string;
  readonly textColor: string;
  readonly textFont: string;

  constructor(input: any) {
    this._id = input._id;
    this.username = input.name;
    this.role = input.role;
    this.avatar = input.avatar;
    this.country = input.country;
    this.city = input.city;
    this.sex = input.sex;
    this.statusText = input.statusText;
    this.nameColor = input.nameColor;
    this.nameFont = input.nameFont;
    this.textColor = input.textColor;
    this.textFont = input.textFont;
  }
}
