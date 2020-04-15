import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OutsideModule } from 'app/modules/outside/outside.module';

import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { LoginFromComponent } from './login/login-form/login-form.component';
import { LoginLinksComponent } from './login/login-links/login-links-component';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, OutsideModule],
  declarations: [
    HomeComponent,
    LoginComponent,
    LoginFromComponent,
    LoginLinksComponent,
  ],
  bootstrap: [HomeComponent],
})
export class HomeModule {}
