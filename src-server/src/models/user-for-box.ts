import { ObjectID } from 'mongodb';

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

export interface UserForBox {
  readonly _id: ObjectID;
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
}
