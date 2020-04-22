import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from 'environments/environment';
import {
  AuthSuccess,
  AuthSuccessResponse,
  AuthRefreshToken,
  AuthTokenDecoded,
  AuthUser,
} from 'app/models';

import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  private userSource$ = new BehaviorSubject<AuthUser>(
    this.generateUser(this.jwtService.getDecodedAuthToken())
  );

  user$ = this.userSource$.asObservable();

  get user(): AuthUser {
    return this.userSource$.value;
  }

  set user(value: AuthUser) {
    this.userSource$.next(value);
  }

  constructor(
    private readonly httpClient: HttpClient,
    private readonly jwtService: JwtService
  ) {}

  login(username: string, password: string): Observable<AuthSuccess> {
    this.logout();

    const loginUrl = `${this.apiUrl}/auth/sign-in`;
    return this.httpClient
      .post<AuthSuccessResponse>(loginUrl, { username, password })
      .pipe(
        map((response) => new AuthSuccess(response)),
        tap((auth) => this.jwtService.setAuthToken(auth.access)),
        tap((auth) => this.jwtService.setRefreshToken(auth.refresh)),
        tap(
          () =>
            (this.user = this.generateUser(
              this.jwtService.getDecodedAuthToken()
            ))
        )
      );
  }

  logout(): void {
    this.jwtService.deleteTokens();
  }

  refresh(): Observable<string> {
    const refreshUrl = `${this.apiUrl}/auth/refresh`;
    const refresh = this.jwtService.getRefreshToken();

    return this.httpClient
      .post<AuthRefreshToken>(refreshUrl, { refresh })
      .pipe(
        tap((auth) => this.jwtService.setAuthToken(auth.access_token)),
        map((auth) => auth.access_token)
      );
  }

  isAuthorized(): boolean {
    return (
      !!this.jwtService.getAuthToken() && !!this.jwtService.getRefreshToken()
    );
  }

  private generateUser(decodedToken: AuthTokenDecoded): AuthUser | null {
    return !!decodedToken
      ? new AuthUser({
          username: decodedToken.username,
          _id: decodedToken.sub,
        })
      : null;
  }
}
