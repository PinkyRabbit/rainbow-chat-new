import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

import { AuthModel } from 'app/shared/models/auth.model';

import { AuthConstants } from '../auth.constants';
import { TokensModel } from 'app/shared/models/tokens.model';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private readonly authTokenKey = AuthConstants.authTokenKey;
  private readonly refreshTokenKey = AuthConstants.refreshTokenKey;

  constructor(private readonly jwtHelper: JwtHelperService) {}

  getAuthToken(): string {
    return localStorage.getItem(this.authTokenKey);
  }

  getRefreshToken(): string {
    return localStorage.getItem(this.refreshTokenKey);
  }

  getDecodedAuthToken(): AuthModel {
    return this.jwtHelper.decodeToken(this.getAuthToken());
  }

  setAuthToken(token: string) {
    localStorage.setItem(this.authTokenKey, token);
  }

  setRefreshToken(token: string) {
    localStorage.setItem(this.refreshTokenKey, token);
  }

  deleteTokens(): void {
    localStorage.removeItem(this.authTokenKey);
    localStorage.removeItem(this.refreshTokenKey);
  }

  isAuthTokenExpired(): boolean {
    if (!this.getAuthToken()) {
      return false;
    }
    return this.jwtHelper.isTokenExpired(this.getAuthToken());
  }
}
