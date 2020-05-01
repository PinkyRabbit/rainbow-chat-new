import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { Router } from '@angular/router';

import { HttpUserService } from 'app/services/http';

import * as UserActions from '../actions/user.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private httpUserService: HttpUserService
  ) {}

  register$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.registrationRequest),
        exhaustMap((payload: UserRegistrationModel) => {
          return this.httpUserService.registration(payload).pipe(
            tap((result: string) => UserActions.registrationSuccess(result)),
              catchError((err) => of(UserActions.registrationFailure(err))
          );
        }
          )
      );
    // ofType(AuthActions.login),
    // concatMap((action) =>
    //   this.authService.login(action.credentials).pipe(
    //     map((token) => AuthActions.loginSuccess({ token })),
    //     catchError((error) => of(AuthActions.loginFailure({ error })))
    //   )
    // )
  )

  // private authService: AuthService,
  // private authDispatchers: AuthDispatchers
}
