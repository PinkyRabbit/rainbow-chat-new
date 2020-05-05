import * as mongoose from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { isEmail } from 'validator';

import { comparePasswordFunction } from './user.types';
import userInfo from './user.info';
import userSettings from './user.settings';

// mongoose.set('debug', true);

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      validate: [isEmail, 'Invalid email'],
    },
    password: {
      type: String,
      select: false,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ['super_admin', 'admin', 'moderator', 'user'],
      default: 'user',
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    minutesOnline: {
      type: Number,
      default: 0,
    },
    lastOnline: {
      type: Date,
      default: Date.now,
    },
    blockedUntil: {
      type: Date,
      default: null,
    },
    premiumUntil: {
      type: Date,
      default: null,
    },
    ...userInfo,
    ...userSettings,
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
