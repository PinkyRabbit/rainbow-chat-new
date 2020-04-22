import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { OutsideModule } from 'app/modules/outside/outside.module';

import { Error401Component } from './error401.component';

@NgModule({
  imports: [RouterModule, CommonModule, OutsideModule],
  declarations: [Error401Component],
  providers: [],
  bootstrap: [Error401Component],
})
export class Error401Module {}
