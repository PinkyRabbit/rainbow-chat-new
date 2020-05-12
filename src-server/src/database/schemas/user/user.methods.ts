import * as bcrypt from 'bcryptjs';

import { UserForBox } from 'models/user-for-box';

/*
  Types
*/
export type comparePasswordFunction = (candidatePassword: string) => void;

export type extractUserForBoxFunction = () => UserForBox;

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
    textColor: this.textColor,
    textFont: this.textFont,
  };
};
