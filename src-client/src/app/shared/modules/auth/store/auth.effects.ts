import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  map,
  mergeMap,
  catchError,
  exhaustMap,
  tap,
  switchMap,
  switchMapTo,
  concatMapTo,
  mapTo,
  concatMap,
} from 'rxjs/operators';

import { TokensModel } from 'app/shared/models/tokens.model';

import * as AuthActions from './auth.actions';
import * as UserActions from '../../user/store/user.actions';

import { AuthHttpService } from '../services/auth-http.service';
import { TokenService } from '../services/token.service';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.login),
      // mergeMap((payload) => this.makeLoginRequest(payload)),
      exhaustMap((payload) =>
        this.authHttpService.login(payload).pipe(
          map((response) => new TokensModel(response)),
          tap((tokens) => this.tokenService.setAuthToken(tokens.token)),
          tap((tokens) =>
            this.tokenService.setRefreshToken(tokens.refreshToken)
          ),
          map(() => this.tokenService.getDecodedAuthToken()),
          switchMap((auth) => [
            AuthActions.loginSuccess(auth),
            UserActions.getMe(),
          ]),
          catchError(() => of(AuthActions.loginError()))
        )
      )
    );
  });

  refresh$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.refresh),
      exhaustMap(() => of(this.tokenService.getTokens())),
      exhaustMap((tokens) =>
        this.authHttpService.refresh(tokens).pipe(
          map((response) => new TokensModel(response)),
          tap((newTokens) => this.tokenService.setAuthToken(newTokens.token)),
          tap((newTokens) =>
            this.tokenService.setRefreshToken(newTokens.refreshToken)
          ),
          map(() => AuthActions.refreshSuccess()),
          catchError(() => of(AuthActions.refreshError()))
        )
      )
      //   map((response) => new TokensModel().deserialize(response)),
      //   tap((tokens) => this.tokenService.setAuthToken(tokens.token)),
      //   tap((tokens) =>
      //     this.tokenService.setRefreshToken(tokens.refreshToken)
      //   ),
      //   map(tokens => tokens.token)
      //   catchError(() => of(AuthActions.refreshError()))
      // ))
      //   mergeMap(() => this.moviesService.getAll()
      //     .pipe(
      //       map(movies => ({ type: '[Movies API] Movies Loaded Success', payload: movies })),
      //       catchError(() => EMPTY)
      //     ))
      // )
    )
  );

  constructor(
    private actions$: Actions,
    private authHttpService: AuthHttpService,
    private tokenService: TokenService
  ) {}
}
