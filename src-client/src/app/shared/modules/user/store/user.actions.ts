import { createAction, props } from '@ngrx/store';
import { MeModel } from 'app/shared/models/me.model';

// me
export const getMe = createAction('[User] Me');
export const getMeSuccess = createAction('[User] Me Success', props<MeModel>());
export const getMeError = createAction('[User] Me Fail');
