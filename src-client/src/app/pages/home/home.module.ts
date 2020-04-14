import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { LoginFromComponent } from './login/login-form/login-form.component';

import { OutsideModule } from 'app/modules/outside/outside.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, OutsideModule],
  declarations: [HomeComponent, LoginComponent, LoginFromComponent],
  bootstrap: [HomeComponent],
})
export class HomeModule {}
