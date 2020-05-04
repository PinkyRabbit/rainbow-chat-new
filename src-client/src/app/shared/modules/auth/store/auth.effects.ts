import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap, tap } from 'rxjs/operators';

import { TokensModel } from 'app/shared/models/tokens.model';

import * as AuthActions from './auth.actions';
import { AuthHttpService } from '../services/auth-http.service';
import { TokenService } from '../services/token.service';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => {
    alert('effect');
    return this.actions$.pipe(
      ofType(AuthActions.login),
      // mergeMap((payload) => this.makeLoginRequest(payload)),
      exhaustMap((payload) =>
        this.authHttpService.login(payload).pipe(
          map((response) => new TokensModel().deserialize(response)),
          tap((tokens) => this.tokenService.setAuthToken(tokens.token)),
          tap((tokens) =>
            this.tokenService.setRefreshToken(tokens.refreshToken)
          ),
          map(() => this.tokenService.getDecodedAuthToken()),
          map((auth) => AuthActions.loginSuccess(auth)),
          catchError(() => of(AuthActions.loginError()))
        )
      )
      // catchError(() => EMPTY)
      // return this.authHttpService
      //   .login()
      //   .pipe(map(() => AuthActions.loginSuccess()));

      // exhaustMap(() => {
      //   return this.authHttpService.login().pipe(
      //     map(() => AuthActions.loginSuccess()),
      //     catchError(() => of(AuthActions.loginError()))
      //   );
      // })
      // mergeMap(() =>
      //   this.moviesService.getAll().pipe(
      //     map((movies) => ({
      //       type: '[Movies API] Movies Loaded Success',
      //       payload: movies,
      //     })),
      //     catchError(() => EMPTY)
      //   )
      // )
    );
  });

  constructor(
    private actions$: Actions,
    private authHttpService: AuthHttpService,
    private tokenService: TokenService
  ) {}
}
