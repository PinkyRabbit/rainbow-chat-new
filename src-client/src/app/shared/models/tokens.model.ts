export class TokensModel {
  token: string;
  refreshToken: string;

  constructor(input: any) {
    this.token = input.token;
    this.refreshToken = input.refreshToken;
  }
}
