import { createSelector } from '@ngrx/store';

import { AuthModel } from '../models/auth.model';
import { MeModel } from '../models/me.model';

export interface AppState {
  auth: AuthModel;
  user: MeModel;
}

export const selectAuth = (state: AppState) => state.auth;
export const selectUser = (state: AppState) => state.user;
