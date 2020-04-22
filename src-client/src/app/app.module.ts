import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { RootComponent } from './modules/root/root.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptor } from './services/auth/auth.interceptor';
// import { NavbarModule } from './components/navbar/navbar.module';
import { HomeModule } from './pages/home/home.module';
import { RegistrationModule } from './pages/registration/registration.module';
import { ChatModule } from './pages/chat/chat.module';
import { EditUserModule } from './pages/user/edit/edit-user.module';
import { Error401Module } from './pages/errors/error401/error401.module';
import { Error404Module } from './pages/errors/error404/error404.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    RegistrationModule,
    ChatModule,
    EditUserModule,
    Error401Module,
    Error404Module,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
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
  declarations: [RootComponent],
  bootstrap: [RootComponent],
})
export class AppModule {}
