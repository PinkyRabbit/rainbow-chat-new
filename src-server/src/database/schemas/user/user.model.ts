import { Document } from 'mongoose';

export interface UserModel extends Document {
  readonly email: string;
  readonly password: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly age: number;
  readonly country: string;
  readonly city: string;
  readonly phone: string;
  readonly role: string;
}