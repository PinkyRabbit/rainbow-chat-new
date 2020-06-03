import { createFeatureSelector, createSelector } from '@ngrx/store';

import { MeModel } from 'app/shared/models/me.model';

// import * as userReducer from './user.reducer';

export const selectUserState = createFeatureSelector<MeModel>('user');
export const selectUser = createSelector(
  selectUserState,
  (userData) => userData
);
export const selectUserId = createSelector(
  selectUserState,
  (userData) => userData._id
);
