import { createAction, props } from '@ngrx/store';

import { UserRegistrationModel } from 'app/shared/models';

export const registrationRequest = createAction(
  '[User] Registration request',
  props<{ payload: UserRegistrationModel }>()
);

export const registrationSuccess = createAction(
  '[User] Registration success',
  props<{ result: string }>()
);

export const registrationFailure = createAction(
  '[User] Registration failed',
  props<{ error: any }>()
);
