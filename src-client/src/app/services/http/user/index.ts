import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from 'environments/environment';
import { UserRegistrationModel } from 'app/shared/models';

@Injectable()
export class HttpWithLoaderService {
  constructor(private http: HttpClient) {}

  $registration(payload: UserRegistrationModel): Observable<string> {
    return this.http
      .post(`${environment.apiUrl}/user/registration`, payload)
      .pipe(
        map((response: string) => response),
        catchError(this.handleError())
      );
  }

  private handleError<T>() {
    return (res: HttpErrorResponse) => {
      return throwError(res.error.message || 'Something went wrong');
    };
  }
}
