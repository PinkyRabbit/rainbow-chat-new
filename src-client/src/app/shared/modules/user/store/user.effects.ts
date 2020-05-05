import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { TokensModel } from 'app/shared/models/tokens.model';

import * as UserActions from './user.actions';
import { UserHttpService } from '../services/user-http.service';
import { MeModel } from 'app/shared/models/me.model';

@Injectable()
export class UserEffects {
  getMe$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.getMe),
      exhaustMap(() =>
        this.userHttpService.getMe().pipe(
          map((response) => new MeModel(response)),
          map((settings) => UserActions.getMeSuccess(settings)),
          tap((settings) =>
            this.router.navigate([`/chat/${settings.username}`])
          ),
          catchError(() => of(UserActions.getMeError()))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private router: Router,
    private userHttpService: UserHttpService
  ) {}
}
