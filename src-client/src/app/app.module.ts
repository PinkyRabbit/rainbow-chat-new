import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './modules/root/root.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './pages/home/home.module';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, HomeModule],
  declarations: [RootComponent],
  bootstrap: [RootComponent]
})
export class AppModule {}
