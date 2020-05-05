import { Document, Schema } from 'mongoose';

import { comparePasswordFunction } from './user.types';

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

enum SelfTargetMessageTypes {
  'dashed',
  'dotted',
  'solid',
  'convex',
}

export interface UserModel extends Document {
  readonly username: string;
  readonly email: string;
  // system
  readonly password: string;
  readonly role: Roles;
  readonly isEmailVerified: boolean;
  readonly hasVerifiedPayments: boolean;
  readonly minutesOnline: number;
  readonly lastOnline: string;
  readonly avatar: Schema.Types.ObjectId;
  // info
  readonly firstName: string;
  readonly lastName: string;
  readonly country: string;
  readonly city: string;
  readonly phones: string[];
  readonly brithDate: string;
  readonly sex: Sex;
  readonly socialStatus: string;
  readonly hobbies: string;
  readonly statusText: string;
  readonly aboutMyself: string;
  // settings
  readonly nameColor: string;
  readonly nameFont: string;
  readonly textColor: string;
  readonly textFont: string;
  readonly soundNotification: string;
  readonly soundVolume: number;
  readonly selfTargetMessageTypes: SelfTargetMessageTypes;
  // dates
  createdAt?: Date;
  updatedAt?: Date;

  comparePassword: comparePasswordFunction;
}
