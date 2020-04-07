export const transformGender = value => {
  if (value !== 0 && value !== 1) {
    return value;
  }

  return value ? 'female' : 'male';
};
