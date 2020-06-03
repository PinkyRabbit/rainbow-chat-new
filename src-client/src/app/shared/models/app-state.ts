import { AuthModel } from './auth.model';
import { MeModel } from './me.model';

export class AppState {
  auth: AuthModel;
  user: MeModel;
}
