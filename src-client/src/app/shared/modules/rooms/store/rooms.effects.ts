import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  map,
  catchError,
  exhaustMap,
  switchMap,
  concatMap,
  tap,
  switchMapTo,
} from 'rxjs/operators';
import { of } from 'rxjs';

import { UserForBox } from 'app/shared/models/user-for-box.model';
import { RoomModel } from 'app/shared/models/room.model';
import { RoomId } from 'app/shared/models/common.models';

import * as RoomsActions from './rooms.actions';
import { RoomsHttpService } from '../services/rooms-http.service';
import { selectFirstRoom } from './rooms.selectors';

@Injectable()
export class RoomsEffects {
  joinRandomRoomOnStart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RoomsActions.joinRandomRoomOnStart),
      exhaustMap(() =>
        this.roomsHttpService.getRandom().pipe(
          switchMap((response) => [
            RoomsActions.joinRandomRoomOnStartSuccess(),
            RoomsActions.joinRoomsOnStart({ rooms: [new RoomId(response)] }),
          ]),
          catchError(() => of(RoomsActions.joinRandomRoomOnStartError()))
        )
      )
    );
  });

  joinRoomsOnStart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RoomsActions.joinRoomsOnStart),
      tap((payload) =>
        console.log(`joinRoomsOnStart$ = ${JSON.stringify(payload)}`)
      ),
      concatMap((payload) => payload.rooms),
      switchMap((room) => of(RoomsActions.joinRoom(room))),
      // exhaustMap((room) =>
      //   of(RoomsActions.joinRoom(room)).pipe(
      //     tap(() => console.log('join room request ended')),
      //     map(() => RoomsActions.joinRoomsOnStartSuccess()),
      //     catchError(() => of(RoomsActions.joinRoomsOnStartError()))
      //   )
      // ),
      // exhaustMap((room) =>
      //   of(RoomsActions.joinRoom(room)).pipe(
      //     tap(() => console.log('join room request ended')),
      //     map(() => RoomsActions.joinRoomsOnStartSuccess()),
      //     catchError(() => of(RoomsActions.joinRoomsOnStartError()))
      //   )
      // ),
      // tap(() =>
      //   this.store
      //     .select(selectFirstRoom)
      //     .pipe(tap((room) => this.router.navigate([`/chat/${room.slug}`])))
      // ),
      // map(() => RoomsActions.joinRoomsOnStartSuccess()),
      catchError(() => of(RoomsActions.joinRoomsOnStartError()))
    );
  });

  joinRoom$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RoomsActions.joinRoom),
      tap((payload) => console.log(`joinRoom$ = ${JSON.stringify(payload)}`)),
      tap(({ roomId }) => console.log(`roomId = ${roomId}}`)),
      exhaustMap(({ roomId }) =>
        this.roomsHttpService.getRoom(roomId).pipe(
          tap((response) =>
            console.log(
              `roomsHttpService.getRoom = ${JSON.stringify(response)}`
            )
          ),
          map((response) => this.createNewRoomObject(response)),
          map((formatedRoom) => RoomsActions.joinRoomSuccess(formatedRoom)),
          catchError(() => of(RoomsActions.joinRoomError()))
        )
      )
    );
  });

  private createNewRoomObject(response): RoomModel {
    const { users: notFormatedUsers, room } = response;
    console.log(`notFormatedUsers.length = ${notFormatedUsers.length}`);
    const users = notFormatedUsers.map((user) => new UserForBox(user));
    return new RoomModel({
      ...room,
      users,
    });
  }

  constructor(
    private actions$: Actions,
    private roomsHttpService: RoomsHttpService,
    private router: Router,
    private store: Store
  ) {}
}
