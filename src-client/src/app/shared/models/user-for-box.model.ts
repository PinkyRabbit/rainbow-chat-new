enum Sex {
  male = 0,
  female = 1,
}

enum Roles {
  'super_admin' = 777,
  'admin' = 2,
  'moderator' = 1,
  'user' = 0,
}

export class UserForBox {
  // tslint:disable-next-line:variable-name
  readonly _id: string;
  readonly firstName: string;
  readonly username: string;
  readonly nameColor: string;
  readonly nameFont: string;
  readonly statusText: string;
  readonly avatar: string;
  // enums
  role: Roles;
  sex: Sex;
  // info
  readonly age: string;
  readonly country: string;
  readonly city: string;

  constructor(input: any) {
    this._id = input._id;
    this.firstName = input.firstName;
    this.username = input.username;
    this.nameColor = input.nameColor;
    this.nameFont = input.nameFont;
    this.statusText = input.statusText;
    this.avatar = input.avatar;
    // enums
    this.sex = input.sex;
    this.role = input.role;
    // info
    this.age = input.age;
    this.country = input.country;
    this.city = input.city;
  }
}
