import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

// import { AuthService } from './auth.service';
import { TokenService } from './services/token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private readonly tokenService: TokenService) {}

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
    if (!this.tokenService.isAuthTokenExpired()) {
      return of(this.tokenService.getAuthToken());
    }
    // return this.authService.refresh();
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
