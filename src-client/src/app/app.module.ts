import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './modules/root/root.component';
import { AppRoutingModule } from './app-routing.module';
// import { NavbarModule } from './components/navbar/navbar.module';
import { HomeModule } from './pages/home/home.module';
import { RegistrationModule } from './pages/registration/registration.module';
import { ChatModule } from './pages/chat/chat.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    RegistrationModule,
    ChatModule,
  ],
  declarations: [RootComponent],
  bootstrap: [RootComponent],
})
export class AppModule {}
