import * as mongoose from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { isEmail } from 'validator';

import { comparePasswordFunction } from './user.types';

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate: [isEmail, 'Invalid email'],
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      select: false,
      required: true,
    },
    firstName: String,
    lastName: String,
    gender: {
      type: String,
      enum: ['male', 'female'],
      default: 'male',
    },
    year: {
      type: Number,
      required: false,
    },
    country: String,
    city: String,
    phone: String,
    role: {
      type: String,
      required: true,
      enum: [
        'super_admin',
        'admin',
        'moderator',
        'diamond_user',
        'user',
        'not_verified_user',
      ],
      default: 'user',
    },
  },
  { timestamps: true },
);

UserSchema.pre('save', function(next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user: any = this;
  if (!this.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, (error, hash) => {
      if (error) {
        return next(error);
      }
      user.password = hash;
      next();
    });
  });
});

const comparePassword: comparePasswordFunction = function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

UserSchema.methods.comparePassword = comparePassword;

export default UserSchema;
