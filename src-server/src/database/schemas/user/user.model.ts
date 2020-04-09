import { Document } from 'mongoose';

import { comparePasswordFunction } from './user.types';

export interface UserModel extends Document {
  readonly email: string;
  readonly username: string;
  readonly password: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly gender: number;
  readonly year: number;
  readonly country: string;
  readonly city: string;
  readonly phone: string;
  readonly role: string;

  comparePassword: comparePasswordFunction;
}
