import * as moment from 'moment';

export const transformYear = value => {
  if (typeof value === 'string') {
    value = parseInt(value, 10);
  }
  if (!Number.isInteger(value)) {
    return value;
  }

  const currentYear = parseInt(moment().format('YYYY'), 10);
  return currentYear - value > 12 ? value : 0;
};
