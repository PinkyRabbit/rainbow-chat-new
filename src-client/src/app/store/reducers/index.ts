import { ActionReducerMap } from '@ngrx/store';

import * as fromAuth from './auth.reducer';

export interface EntityState {
  auth: fromAuth.AuthState;
}

export const reducers: ActionReducerMap<EntityState> = {
  auth: fromAuth.reducer,
};
