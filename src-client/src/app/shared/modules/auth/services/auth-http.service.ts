import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'environments/environment';
import { TokensModel } from 'app/shared/models/tokens.model';

@Injectable({
  providedIn: 'root',
})
export class AuthHttpService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  login(payload) {
    const { type, ...credentials } = payload;
    return this.http.post(`${this.apiUrl}/auth/login`, credentials);
  }
}
