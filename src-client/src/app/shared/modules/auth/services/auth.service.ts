import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';

import { environment } from 'environments/environment';

import { TokenService } from './token.service';
import { TokensModel } from 'app/shared/models/tokens.model';
import { LoginModel } from 'app/shared/models/login.model';
import { map, tap, switchMap, switchMapTo, catchError } from 'rxjs/operators';
import * as UserActions from '../../user/store/user.actions';
import { of, EMPTY, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly tokenService: TokenService,
    private readonly store: Store
  ) {}

  login(credentials: LoginModel) {
    const loginUrl = `${this.apiUrl}/auth/login`;

    return this.httpClient.post<TokensModel>(loginUrl, credentials).pipe(
      map((response) => new TokensModel(response)),
      tap((tokens) => this.tokenService.setAuthToken(tokens.token)),
      tap((tokens) => this.tokenService.setRefreshToken(tokens.refreshToken)),
      tap(() => this.store.dispatch(UserActions.getMe()))
    );
  }

  logout() {
    const logoutUrl = `${this.apiUrl}/auth/logout`;
    this.resetStore();
    const refreshToken = this.tokenService.getRefreshToken();
    if (!refreshToken) {
      return EMPTY;
    }
    this.tokenService.deleteTokens();
    return this.httpClient.post<string>(logoutUrl, { refreshToken });
  }

  refresh() {
    const refreshToken = this.tokenService.getRefreshToken();
    const { _id, rememberMe } = this.tokenService.getDecodedAuthToken();
    this.tokenService.deleteTokens();
    const refreshUrl = `${this.apiUrl}/auth/refresh/${_id}?rememberMe=${rememberMe}`;
    return this.httpClient.post(refreshUrl, { refreshToken }).pipe(
      map((response) => new TokensModel(response)),
      tap((tokens) => this.tokenService.setAuthToken(tokens.token)),
      tap((tokens) => this.tokenService.setRefreshToken(tokens.refreshToken)),
      map((tokens) => tokens.token)
    );
  }

  isAuthorized(): boolean {
    return (
      !!this.tokenService.getAuthToken() &&
      !!this.tokenService.getRefreshToken()
    );
  }

  private resetStore() {
    this.store.dispatch(UserActions.reset());
  }
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
  */
