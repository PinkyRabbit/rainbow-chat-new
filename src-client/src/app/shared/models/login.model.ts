export class LoginModel {
  username: string;
  password: string;
  rememberMe: boolean;

  constructor(input: any) {
    this.username = input.username;
    this.password = input.password;
    this.rememberMe = input.rememberMe;
  }
}
