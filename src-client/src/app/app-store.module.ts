import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { JwtHelperService } from '@auth0/angular-jwt';

import { environment } from '../environments/environment';
import { AuthReducer } from './shared/modules/auth/store/auth.reducer';
import { AuthEffects } from './shared/modules/auth/store/auth.effects';
import { UserReducer } from './shared/modules/user/store/user.reducer';
import { UserEffects } from './shared/modules/user/store/user.effects';

const reducers = {
  auth: AuthReducer,
  user: UserReducer,
};

const effects = [AuthEffects, UserEffects];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    // store
    StoreModule.forRoot(reducers, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot(effects),
  ],
  providers: [
    {
      provide: JwtHelperService,
      useValue: new JwtHelperService(),
    },
  ],
  exports: [StoreModule, EffectsModule],
})
export class AppStoreModule {}
