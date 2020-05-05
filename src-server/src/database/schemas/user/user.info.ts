const userInfo = {
  firstName: { maxlength: 30 },
  lastName: { maxlength: 30 },
  country: { maxlength: 30 },
  city: { maxlength: 30 },
  brithDate: { maxlength: 30 },
  socialStatus: { maxlength: 30 },
  statusText: { maxlength: 120 },
  hobbies: { maxlength: 300 },
  aboutMyself: { maxlength: 500 },
};

const userInfoWithTypeAndDefaults: any = Object.entries(userInfo)
  .map(([key, value]) => [
    key,
    {
      ...value,
      trim: true,
      type: String,
      default: '',
    },
  ])
  .reduce((accum, [key, value]) => {
    accum[key.toString()] = value;
    return accum;
  }, {});

userInfoWithTypeAndDefaults.sex = {
  trim: true,
  type: String,
  enum: ['male', 'female'],
  default: 'male',
};

userInfoWithTypeAndDefaults.phones = [
  {
    maxlength: 30,
    trim: true,
    type: String,
  },
];

export default userInfoWithTypeAndDefaults;
