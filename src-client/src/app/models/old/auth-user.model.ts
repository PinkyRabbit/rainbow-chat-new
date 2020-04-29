export class AuthUser {
  id: string;
  rememberMe: boolean;

  constructor(data: Partial<AuthUser>) {
    this.id = data.id;
    this.rememberMe = data.rememberMe;
  }
}
