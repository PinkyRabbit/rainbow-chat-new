import { createAction, props } from '@ngrx/store';

import { RoomId } from 'app/shared/models/common.models';
import { RoomModel } from 'app/shared/models/room.model';

export const reset = createAction('[Rooms] Reset');
// get random room id
export const joinRandomRoomOnStart = createAction(
  '[Rooms] Get random room on start'
);
export const joinRandomRoomOnStartSuccess = createAction(
  '[Rooms] Get random room on start Success'
);
export const joinRandomRoomOnStartError = createAction(
  '[Rooms] Get random room on start Fail'
);
// join rooms
export const joinRoomsOnStart = createAction(
  '[Rooms] Join rooms on start',
  props<{ rooms: RoomId[] }>()
);
export const joinRoomsOnStartSuccess = createAction(
  '[Rooms] Join rooms on start Success'
);
export const joinRoomsOnStartError = createAction(
  '[Rooms] Join rooms on start Fail'
);
// join room
export const joinRoom = createAction('[Rooms] Join room', props<RoomId>());
export const joinRoomSuccess = createAction(
  '[Rooms] Join room Success',
  props<RoomModel>()
);
export const joinRoomError = createAction('[Rooms] Join room Fail');
