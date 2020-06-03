import { createFeatureSelector, createSelector } from '@ngrx/store';

import { RoomModel } from 'app/shared/models/room.model';

// import * as userReducer from './user.reducer';

export const selectRoomsState = createFeatureSelector<RoomModel[]>('rooms');
export const selectFirstRoom = createSelector(selectRoomsState, (rooms) => {
  console.log(rooms);
  return rooms.length ? rooms[0] : null;
});
export const pickUsersInTheRoom = createSelector(
  selectRoomsState,
  (rooms, roomSlug) => {
    const room: RoomModel = rooms.find(
      (roomInState) => roomInState.slug === roomSlug
    );
    return room ? room.users : null;
  }
);

export const pickMessagesInTheRoom = createSelector(
  selectRoomsState,
  (rooms, roomSlug) => {
    const room: RoomModel = rooms.find(
      (roomInState) => roomInState.slug === roomSlug
    );
    return room ? room.messages : [];
  }
);
