import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthHttpService {
  private apiUrl = environment.apiUrl;
  constructor(
    private http: HttpClient,
    private readonly jwtHelper: JwtHelperService
  ) {}

  login(payload) {
    const { type, ...credentials } = payload;
    return this.http.post(`${this.apiUrl}/auth/login`, credentials);
  }

  refresh(payload) {
    const { token, refreshToken } = payload;
    const { _id } = this.jwtHelper.decodeToken(token);
    return this.http.post(`${this.apiUrl}/auth/refresh/${_id}`, {
      refreshToken,
    });
  }
}
