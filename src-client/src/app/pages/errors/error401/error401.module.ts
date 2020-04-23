import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutsideModule } from 'app/modules/outside/outside.module';
import { LoginFormModule } from 'app/components/outside/login-form/login-form.module';

import { Error401Component } from './error401.component';

@NgModule({
  imports: [CommonModule, OutsideModule, LoginFormModule],
  declarations: [Error401Component],
  providers: [],
  bootstrap: [Error401Component],
})
export class Error401Module {}
