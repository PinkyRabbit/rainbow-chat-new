export class TokensModel {
  token: string;
  refreshToken: string;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
