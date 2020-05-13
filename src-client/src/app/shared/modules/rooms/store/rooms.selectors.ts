import { createFeatureSelector, createSelector } from '@ngrx/store';

import { RoomModel } from 'app/shared/models/room.model';

// import * as userReducer from './user.reducer';

export const selectRoomsState = createFeatureSelector<RoomModel[]>('rooms');
export const selectFirstRoom = createSelector(selectRoomsState, (rooms) => {
  return rooms[0];
});
