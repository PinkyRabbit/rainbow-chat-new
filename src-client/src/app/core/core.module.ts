import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarModule } from './components/navbar/navbar.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeModule } from './pages/home/home.module';
// import { RegistrationModule } from './pages/registration/registration.module';
// import { ChatModule } from './pages/chat/chat.module';
// import { EditUserModule } from './pages/user/edit/edit-user.module';
import { Error401Module } from './pages/errors/error401/error401.module';
import { Error404Module } from './pages/errors/error404/error404.module';

const PAGES = [
  HomeModule,
  // RegistrationModule,
  // ChatModule,
  // EditUserModule,
  Error401Module,
  Error404Module,
];

@NgModule({
  imports: [CommonModule, RouterModule, ...PAGES],
  declarations: [],
  exports: [],
})
export class CoreModule {}
