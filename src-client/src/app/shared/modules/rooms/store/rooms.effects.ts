import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  map,
  catchError,
  exhaustMap,
  switchMap,
  concatMap,
  tap,
  merge,
  switchMapTo,
} from 'rxjs/operators';
import { of } from 'rxjs';

import { UserForBox } from 'app/shared/models/user-for-box.model';
import { RoomModel } from 'app/shared/models/room.model';
import { RoomId } from 'app/shared/models/common.models';

import * as RoomsActions from './rooms.actions';
import { RoomsHttpService } from '../services/rooms-http.service';
import { Socket } from 'ngx-socket-io';
import { SocketIoService } from 'app/shared/services/socket-io.service';

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
      concatMap((payload) => payload.rooms),
      tap(() => this.socketIoService.connect),
      switchMap((room) =>
        of(RoomsActions.joinRoom(room)).pipe(
          merge(
            this.actions$.pipe(
              ofType(RoomsActions.joinRoomSuccess, RoomsActions.joinRoomError),
              tap(() => this.router.navigate(['/chat'])),
              switchMapTo(of(RoomsActions.joinRoomsOnStartSuccess())),
              catchError(() => of(RoomsActions.joinRoomsOnStartError()))
            )
          )
        )
      )
    );
  });

  joinRoom$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RoomsActions.joinRoom),
      exhaustMap(({ roomId }) =>
        this.roomsHttpService.getRoom(roomId).pipe(
          map((response) => this.createNewRoomObject(response)),
          map((formatedRoom) => RoomsActions.joinRoomSuccess(formatedRoom)),
          tap((formatedRoom) =>
            this.socketIoService.joinRoom(formatedRoom.slug)
          ),
          catchError(() => of(RoomsActions.joinRoomError()))
        )
      )
    );
  });

  private createNewRoomObject(response): RoomModel {
    const { users: notFormatedUsers, room } = response;
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
    private socketIoService: SocketIoService // private socket: Socket
  ) {}
}
