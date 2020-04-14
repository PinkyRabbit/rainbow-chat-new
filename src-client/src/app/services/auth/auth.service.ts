import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

import { environment } from 'app/environments/environment';
import { AuthSuccessResponse, AuthSuccess } from 'app/models';

import { JwtService } from './jwt.service';

@Injectable()
export class AuthService {
  // The url of your login route on the server
  private apiUrl = environment.apiUrl;

  constructor(
    private httpClient: HttpClient,
    private readonly jwtService: JwtService
  ) {}

  public login(username: string, password: string) {
    // this.logout();
    const loginUrl = `${this.apiUrl}/auth/sign-in`;

    return this.httpClient
      .post<AuthSuccessResponse>(loginUrl, {
        username,
        password,
      })
      .pipe(
        map((response) => new AuthSuccess(response)),
        tap((auth) => this.jwtService.setAuthToken(auth.access)),
        tap((auth) => this.jwtService.setRefreshToken(auth.refresh))
      );
  }

  public logout(): void {
    this.jwtService.deleteTokens();
  }
}

/*
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

// import { apiRoutes } from 'src/constants';

import { environment } from 'app/environments-sample/environment';
// import {
//   AuthSuccess,
//   AuthSuccessResponse,
//   DecodedAuthToken,
//   RefreshTokenResponse,
//   User,
// } from '../models';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  // private userSource$ = new BehaviorSubject<User>(
  //   this.generateUser(this.jwtService.getDecodedAuthToken())
  // );

  // user$ = this.userSource$.asObservable();

  // get user(): User {
  //   return this.userSource$.value;
  // }

  // set user(value: User) {
  //   this.userSource$.next(value);
  // }

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
  /*

  refresh(): Observable<string> {
    const refreshUrl = `${this.apiUrl}/${apiRoutes.token.base}/${apiRoutes.token.refresh}/`;
    const refresh = this.jwtService.getRefreshToken();

    return this.httpClient
      .post<RefreshTokenResponse>(refreshUrl, { refresh })
      .pipe(
        tap((auth) => this.jwtService.setAuthToken(auth.access)),
        map((auth) => auth.access)
      );
  }

  isAuthorized(): boolean {
    return !!this.jwtService.getAuthToken();
  }

  private generateUser(decodedToken: DecodedAuthToken): User | null {
    return !!decodedToken
      ? new User({
          username: decodedToken.username,
          firstName: decodedToken.first_name,
          lastName: decodedToken.last_name,
        })
      : null;
  }
}
 */
