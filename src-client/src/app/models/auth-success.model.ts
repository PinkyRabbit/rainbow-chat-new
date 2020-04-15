import { HttpErrorResponse } from '@angular/common/http';

import { AuthBase } from './auth-base.model';
import { AuthSuccessResponse } from './auth-success-response.model';

export class AuthSuccess implements AuthBase {
  access: string;
  refresh: string;
  error: HttpErrorResponse;
  message: string;

  constructor(data: AuthSuccessResponse) {
    this.access = data.access_token;
    this.refresh = data.refresh_token;
  }
}
