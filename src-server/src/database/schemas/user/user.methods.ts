import * as bcrypt from 'bcryptjs';

import { UserForBox } from 'models/user-for-box';
import { UserForMessage } from 'models/user-for-message';

/*
  Types
*/
export type comparePasswordFunction = (candidatePassword: string) => void;

export type extractUserForBoxFunction = () => UserForBox;

export type extractUserForMessageFunction = () => UserForMessage;

/*
  Methods
*/
export const comparePassword: comparePasswordFunction = function(
  candidatePassword,
) {
  return bcrypt.compare(candidatePassword, this.password);
};

export const extractUserForBox: extractUserForBoxFunction = function() {
  const fullName =
    '' + this.firstName + `${this.lastName ? ' ' + this.lastName : ''}`;
  return {
    _id: this._id,
    username: this.username,
    role: this.role,
    avatar: this.avatar,
    fullName,
    country: this.country,
    city: this.city,
    sex: this.sex,
    statusText: this.statusText,
    nameColor: this.nameColor,
    nameFont: this.nameFont,
    // optional props
  };
};

export const extractUserForMessage: extractUserForMessageFunction = function() {
  const fullName =
    '' + this.firstName + `${this.lastName ? ' ' + this.lastName : ''}`;
  return {
    user: {
      _id: this._id,
      username: this.username,
      role: this.role,
      avatar: this.avatar,
      fullName,
      country: this.country,
      city: this.city,
      sex: this.sex,
      statusText: this.statusText,
      nameColor: this.nameColor,
      nameFont: this.nameFont,
    },
    textColor: this.textColor,
    textFont: this.textFont,
  };
};
