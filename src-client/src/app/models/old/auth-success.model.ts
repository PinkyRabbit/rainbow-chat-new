import { HttpErrorResponse } from '@angular/common/http';

import { AuthBase } from './auth-base.model';
import { AuthSuccessResponse } from './auth-success-response.model';

export class AuthSuccess implements AuthBase {
  token: string;
  refreshToken: string;
  error: HttpErrorResponse;
  message: string;

  constructor(data: AuthSuccessResponse) {
    this.token = data.token;
    this.refreshToken = data.refreshToken;
  }
}
