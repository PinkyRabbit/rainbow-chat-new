/*

import { AuthService, JwtService } from '../services';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private readonly jwtService: JwtService,
    private readonly authService: AuthService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.getAuthToken().pipe(
      map((token) => this.authorizeRequest(token, req)),
      switchMap((authorizedRequest) =>
        this.handleRequest(authorizedRequest, next)
      )
    );
  }

  private getAuthToken(): Observable<string> {
    if (!this.jwtService.isAuthTokenExpired()) {
      return of(this.jwtService.getAuthToken());
    }
    return this.authService.refresh();
  }

  private authorizeRequest(
    token: string,
    req: HttpRequest<any>
  ): HttpRequest<any> {
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return req.clone({ headers });
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

  private handleError(
    resp: HttpErrorResponse,
    req: HttpRequest<any>,
    next: HttpHandler
  ) {
    return throwError(resp);
  }
}
*/
