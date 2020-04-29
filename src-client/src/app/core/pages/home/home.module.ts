import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

import { OutsideModule } from 'app/core/layouts/outside.module';
import { LoginFormModule } from 'app/core/components/outside/login-form/login-form.module';

import { HomeComponent } from './home.component';
import { MainUnauthorizedComponent } from './main/unauthorized/main-unauthorized.component';
import { HomeMainComponent } from './main/home-main.component';

@NgModule({
  imports: [CommonModule, OutsideModule, LoginFormModule],
  declarations: [HomeComponent, HomeMainComponent, MainUnauthorizedComponent],
  providers: [Title],
  bootstrap: [HomeComponent],
})
export class HomeModule {}
