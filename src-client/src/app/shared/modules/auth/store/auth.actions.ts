import { createAction, props } from '@ngrx/store';
import { AuthModel } from 'app/shared/models/auth.model';

// Login
export const login = createAction(
  '[Auth] Login',
  props<{ username: string; password: string }>()
);
export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<AuthModel>()
);
export const loginError = createAction('[Auth] Login Fail');

// Login
export const refresh = createAction('[Auth] Refresh');
export const refreshSuccess = createAction('[Auth] Refresh Success');
export const refreshError = createAction('[Auth] Refresh Fail');
