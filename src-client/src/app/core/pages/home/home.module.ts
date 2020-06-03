import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { OutsideModule } from 'app/core/layouts/outside.module';
import { LoginFormModule } from 'app/core/components/outside/login-form/login-form.module';

import { HomeComponent } from './home.component';
import { MainUnauthorizedComponent } from './main/unauthorized/main-unauthorized.component';
import { MainLoggedInComponent } from './main/logged-in/main-logged-in.component';
import { HomeMainComponent } from './main/home-main.component';

@NgModule({
  imports: [RouterModule, CommonModule, OutsideModule, LoginFormModule],
  declarations: [
    HomeComponent,
    HomeMainComponent,
    MainUnauthorizedComponent,
    MainLoggedInComponent,
  ],
  providers: [Title],
  bootstrap: [HomeComponent],
})
export class HomeModule {}
