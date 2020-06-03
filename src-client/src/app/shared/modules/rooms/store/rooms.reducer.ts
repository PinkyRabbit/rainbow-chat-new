import { Action, createReducer, on } from '@ngrx/store';

import * as RoomsAction from './rooms.actions';

import { RoomModel } from 'app/shared/models/room.model';

export const initialState: RoomModel[] = [];

const reducer = createReducer(
  initialState,
  on(RoomsAction.reset, () => []),
  // get random room id
  on(RoomsAction.joinRandomRoomOnStart, (state) => state),
  on(RoomsAction.joinRandomRoomOnStartSuccess, (state) => state),
  on(RoomsAction.joinRandomRoomOnStartError, (state) => state),
  // join rooms
  on(RoomsAction.joinRoomsOnStart, (state) => state),
  on(RoomsAction.joinRoomsOnStartSuccess, (state) => state),
  on(RoomsAction.joinRoomsOnStartError, (state) => state),
  // join room
  on(RoomsAction.joinRoom, (state) => state),
  on(RoomsAction.joinRoomSuccess, (state, newRoom) => {
    state = state.slice();
    const oldIndex = state.findIndex((room) => room._id === newRoom._id);
    if (oldIndex === -1) {
      state.push(newRoom);
    } else {
      state[oldIndex] = newRoom;
    }
    return state;
  }),
  on(RoomsAction.joinRoomError, (state) => state),
  // add message to room
  on(RoomsAction.addRoomMessage, (state, { roomSlug, message }) => {
    state = state.slice();
    const roomIndex = state.findIndex((room) => room.slug === roomSlug);
    if (roomIndex !== -1) {
      state[roomIndex].messages.push(message);
      if (state[roomIndex].messages.length > 100) {
        state[roomIndex].messages.shift();
      }
    }
    return state;
  })
);

export function RoomsReducer(state: RoomModel[] | undefined, action: Action) {
  return reducer(state, action);
}
