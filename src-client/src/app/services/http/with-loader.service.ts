import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError, delay, map, finalize } from 'rxjs/operators';

import { environment } from 'environments/environment';
import { UserRegistrationModel } from 'app/shared/models';
import { LoaderService } from 'app/core/components/loader/loader.service';

@Injectable()
export class HttpWithLoaderService {
  constructor(private loaderService: LoaderService, private http: HttpClient) {}

  $registration(payload: UserRegistrationModel): Observable<string> {
    this.loaderService.show('Сохраняем нового пользователя...');
    return this.http
      .post(`${environment.apiUrl}/user/registration`, payload)
      .pipe(
        delay(3000),
        map((response: string) => response),
        catchError(this.handleError()),
        finalize(() => this.loaderService.hide())
      );
  }

  private handleError<T>() {
    return (res: HttpErrorResponse) => {
      return throwError(res.error.message || 'Something went wrong');
    };
  }
}
