import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, exhaustMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { MeModel } from 'app/shared/models/me.model';
import { RoomId } from 'app/shared/models/common.models';

import * as UserActions from './user.actions';
import * as RoomsActions from '../../rooms/store/rooms.actions';
import { UserHttpService } from '../services/user-http.service';

@Injectable()
export class UserEffects {
  getMe$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.getMe),
      exhaustMap(() =>
        this.userHttpService.getMe().pipe(
          map((response) => ({
            userSettings: new MeModel(response),
            rooms: this.extractRooms(response).map((room) => new RoomId(room)),
          })),
          switchMap(({ userSettings, rooms }) => {
            const secondAction = rooms.length
              ? RoomsActions.joinRoomsOnStart({ rooms })
              : RoomsActions.joinRandomRoomOnStart();
            return [UserActions.getMeSuccess(userSettings), secondAction];
          }),
          catchError(() => of(UserActions.getMeError()))
        )
      )
    );
  });

  private extractRooms(response): string[] {
    return response.rooms || [];
  }

  constructor(
    private actions$: Actions,
    private userHttpService: UserHttpService
  ) {}
}
