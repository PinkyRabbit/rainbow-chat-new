import { UserReducer } from '../modules/user/store/user.reducer';
import { combineReducers } from '@ngrx/store';

export const appReducer = combineReducers({
  user: UserReducer,
});
