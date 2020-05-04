import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  // generateUser(decodedToken: AuthTokenDecoded): AuthUser | null {
  //   return !!decodedToken
  //     ? new AuthUser({
  //         id: decodedToken.id,
  //         rememberMe: decodedToken.rememberMe,
  //       })
  //     : null;
  // }
}
/*
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, concat } from 'rxjs';
import { map, tap, concatMap, flatMap } from 'rxjs/operators';

import { environment } from 'environments/environment';
import {
  AuthSuccess,
  AuthSuccessResponse,
  AuthRefreshToken,
  AuthTokenDecoded,
  AuthUser,
  AuthBase,
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

  login(username: string, password: string): Observable<string> {
    const loginUrl = `${this.apiUrl}/auth/login`;
    const logout$ = this.logout();
    const httpRequest$ = this.httpClient
      .post<AuthSuccessResponse>(loginUrl, {
        username,
        password,
      })
      .pipe(
        map((response) => new AuthSuccess(response)),
        tap((auth) => this.jwtService.setAuthToken(auth.token)),
        tap((auth) => this.jwtService.setRefreshToken(auth.refreshToken)),
        tap(
          () =>
            (this.user = this.generateUser(
              this.jwtService.getDecodedAuthToken()
            ))
        )
      );
    return logout$.pipe(flatMap(() => httpRequest$));
    // return logout$.pipe(concatMap(() => httpRequest$()));
    // return concat(this.logout, httpRequest).pipe(
    //   map((response) => new AuthSuccess(response)),
    //   tap((auth) => this.jwtService.setAuthToken(auth.token)),
    //   tap((auth) => this.jwtService.setRefreshToken(auth.refreshToken)),
    //   tap(
    //     () =>
    //       (this.user = this.generateUser(this.jwtService.getDecodedAuthToken()))
    //   )
    // );
    // const loginUrl = `${this.apiUrl}/auth/login`;
    // return this.httpClient
    //   .post<AuthSuccessResponse>(loginUrl, { username, password })
    //   .pipe(
    //     map((response) => new AuthSuccess(response)),
    //     tap((auth) => this.jwtService.setAuthToken(auth.token)),
    //     tap((auth) => this.jwtService.setRefreshToken(auth.refreshToken)),
    //     tap(
    //       () =>
    //         (this.user = this.generateUser(
    //           this.jwtService.getDecodedAuthToken()
    //         ))
    //     )
    //   );
  }

  logout(): Observable<string> {
    const logoutUrl = `${this.apiUrl}/auth/logout`;
    const refreshToken = this.jwtService.getRefreshToken();
    return this.httpClient.post<string>(logoutUrl, { refreshToken });
  }

  refresh() {
    // refresh(): Observable<string> {
    const refreshUrl = `${this.apiUrl}/auth/refresh`;
    const refresh = this.jwtService.getRefreshToken();

    // return this.httpClient.post<AuthRefreshToken>(refreshUrl, { refresh });
    // .pipe(
    //   tap((auth) => this.jwtService.setAuthToken(auth.token)),
    //   map((auth) => auth.token)
    // );
  }

  isAuthorized(): boolean {
    return (
      !!this.jwtService.getAuthToken() && !!this.jwtService.getRefreshToken()
    );
  }

  private generateUser(decodedToken: AuthTokenDecoded): AuthUser | null {
    return !!decodedToken
      ? new AuthUser({
          id: decodedToken.id,
          rememberMe: decodedToken.rememberMe,
        })
      : null;
  }
}
*/
