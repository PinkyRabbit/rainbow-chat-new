import * as _ from 'lodash';

export const deepCompareTwoArraysOfObjects = (x, y) => {
  return _(x).differenceWith(y, _.isEqual).isEmpty();
};
