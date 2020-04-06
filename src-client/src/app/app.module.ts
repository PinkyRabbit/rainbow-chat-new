import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './modules/root/root.component';
import { AppRoutingModule } from './app-routing.module';
// import { OutsideModule } from './modules/outside/outside.module';
import { HomeModule } from './pages/home/home.module';
import { RegistrationModule } from './pages/registration/registration.module';

@NgModule({
  // imports: [BrowserModule, AppRoutingModule, OutsideModule],
  imports: [BrowserModule, AppRoutingModule, HomeModule, RegistrationModule],
  declarations: [RootComponent],
  bootstrap: [RootComponent],
})
export class AppModule {}
