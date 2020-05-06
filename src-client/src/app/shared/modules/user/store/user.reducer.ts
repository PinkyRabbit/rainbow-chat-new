import { Action, createReducer, on } from '@ngrx/store';

import * as UserActions from './user.actions';

import { MeModel } from 'app/shared/models/me.model';

export const initialState: MeModel = {
  _id: null,
  username: 'Unknown user',
  nameColor: '255,255,255',
  nameFont: 'font-1',
  textColor: '255,255,255',
  textFont: 'font-1',
  soundVolume: 100,
  soundNotification: 'sound-1',
  statusText: '',
  selfTargetMessageTypes: null,
  minutesOnline: 0,
};

const reducer = createReducer(
  initialState,
  on(UserActions.reset, () => Object.assign({}, initialState)),

  // me
  on(UserActions.getMe, (state) => state),
  on(UserActions.getMeSuccess, (state, result) => ({
    ...state,
    _id: result._id,
    username: result.username,
    nameColor: result.nameColor,
    nameFont: result.nameFont,
    textColor: result.textColor,
    textFont: result.textFont,
    soundVolume: result.soundVolume,
    soundNotification: result.soundNotification,
    statusText: result.statusText,
    selfTargetMessageTypes: result.selfTargetMessageTypes,
  })),
  on(UserActions.getMeError, (state) => state)
);

export function UserReducer(state: MeModel | undefined, action: Action) {
  return reducer(state, action);
}
