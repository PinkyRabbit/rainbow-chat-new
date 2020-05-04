enum Sex {
  male = 0,
  female = 1,
}

export class UserRegistrationModel {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  year: number;
  gender: Sex;
  rulesAccepted: boolean;
}
