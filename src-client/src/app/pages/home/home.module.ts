import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

import { OutsideModule } from 'app/modules/outside/outside.module';

import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { LoginFormModule } from 'app/components/outside/login-form/login-form.module';

@NgModule({
  imports: [CommonModule, OutsideModule, LoginFormModule],
  declarations: [HomeComponent, LoginComponent],
  providers: [Title],
  bootstrap: [HomeComponent],
})
export class HomeModule {}
