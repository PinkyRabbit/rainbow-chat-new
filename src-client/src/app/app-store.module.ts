import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { JwtHelperService } from '@auth0/angular-jwt';

import { environment } from '../environments/environment';
import { UserReducer } from './shared/modules/user/store/user.reducer';
import { UserEffects } from './shared/modules/user/store/user.effects';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';

const rootReducer = {
  user: UserReducer,
};

const effects = [UserEffects];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    // store
    StoreModule.forRoot(rootReducer, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot(effects),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: JwtHelperService,
      useValue: new JwtHelperService(),
    },
  ],
  exports: [StoreModule, EffectsModule],
})
export class AppStoreModule {}
