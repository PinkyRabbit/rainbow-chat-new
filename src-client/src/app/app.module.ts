import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { RootComponent } from './modules/root/root.component';
import { AppRoutingModule } from './app-routing.module';
// import { NavbarModule } from './components/navbar/navbar.module';
import { HomeModule } from './pages/home/home.module';
import { RegistrationModule } from './pages/registration/registration.module';
import { ChatModule } from './pages/chat/chat.module';
import { EditUserModule } from './pages/user/edit/edit-user.module';
import { Error404Module } from './pages/error404/error404.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    RegistrationModule,
    ChatModule,
    EditUserModule,
    Error404Module,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
  ],
  declarations: [RootComponent],
  bootstrap: [RootComponent],
})
export class AppModule {}
