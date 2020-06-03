import { Action, createReducer, on } from '@ngrx/store';

import * as AuthActions from './auth.actions';

import { AuthModel } from 'app/shared/models/auth.model';

export const initialState: AuthModel = {
  _id: null,
  rememberMe: false,
};

const reducer = createReducer(
  initialState,

  // login
  on(AuthActions.login, (state) => state),
  on(AuthActions.loginSuccess, (state, result) => ({
    ...state,
    _id: result._id,
    rememberMe: result.rememberMe,
  })),
  on(AuthActions.loginError, (state) => state),

  // refresh
  on(AuthActions.refresh, (state) => state),
  on(AuthActions.refreshSuccess, (state) => state),
  on(AuthActions.refreshError, (state) => state)
);

export function AuthReducer(state: AuthModel | undefined, action: Action) {
  return reducer(state, action);
}
