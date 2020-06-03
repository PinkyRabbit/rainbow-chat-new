import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, of, throwError, timer, Observer, from } from 'rxjs';
import {
  map,
  switchMap,
  catchError,
  exhaustMap,
  finalize,
  tap,
} from 'rxjs/operators';

import { TokenService } from '../modules/auth/services/token.service';
import { AuthService } from '../modules/auth/services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  private isRefreshing = false;

  constructor(
    private readonly authService: AuthService,
    private readonly tokenService: TokenService,
    private readonly router: Router
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.getAuthToken(req).pipe(
      map((token) => this.authorizeRequest(token, req)),
      switchMap((authorizedRequest) =>
        this.handleRequest(authorizedRequest, next)
      )
    );
  }

  private getAuthToken(req) {
    return of(this.isARefreshUrl(req)).pipe(
      exhaustMap((result) => (result ? of('') : this.isTokenExists()))
    );
  }

  private isARefreshUrl({ url }) {
    return /auth\/refresh/.test(url);
  }

  private isTokenExists(): Observable<string> {
    return of(this.tokenService.isAllTokensExists()).pipe(
      exhaustMap((isTokensExists) =>
        isTokensExists ? this.isOnPending() : of('')
      )
    );
  }

  private isOnPending() {
    return this.isRefreshing
      ? this.recallWithDelay()
      : this.isTokensNotExpired();
  }

  private recallWithDelay() {
    return timer(1).pipe(exhaustMap(() => this.isTokenExists()));
  }

  private isTokensNotExpired(): Observable<string> {
    const isExpired = this.tokenService.isAuthTokenExpired();
    return isExpired
      ? this.refreshAndGetToken()
      : this.getAuthTokenFromStore$();
  }

  private getAuthTokenFromStore$(): Observable<string> {
    return of(this.tokenService.getAuthToken());
  }

  private refreshAndGetToken(): Observable<string> {
    this.isRefreshing = true;
    return this.authService.refresh().pipe(
      exhaustMap(() => this.getAuthTokenFromStore$()),
      finalize(() => (this.isRefreshing = false))
    );
  }

  private handleRequest(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next
      .handle(req)
      .pipe(
        catchError((resp: HttpErrorResponse) =>
          this.handleError(resp, req, next)
        )
      );
  }

  private authorizeRequest(
    token: string,
    req: HttpRequest<any>
  ): HttpRequest<any> {
    if (!token) {
      return req;
    }
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return req.clone({ headers });
  }

  private handleError(
    err: HttpErrorResponse,
    req: HttpRequest<any>,
    next: HttpHandler
  ) {
    if (err instanceof HttpErrorResponse) {
      switch (err.status) {
        case 401:
          this.router.navigate(['/']);
          break;
        // case 403:
        //   this.snackbarService.show({
        //     title: 'Forbidden',
        //     body: `Forbidden`,
        //     type: 'error',
        //   });
        //   break;
        // case 404:
        //   this.snackbarService.show({
        //     title: 'Error 404',
        //     type: 'error',
        //   });
        //   break;
        default:
          const msg = 'Unknown Error Type';
          // if (err.error.message) {
          //   msg = err.error.message;
          // }
          // this.snackbarService.show({ title: msg, type: 'error' });
          console.log(msg);
          break;
      }
    }
    console.log('auth.interceptor.ts => handleError');
    return throwError(err);
  }
}
