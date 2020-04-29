import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { OutsideModule } from 'app/core/layouts/outside.module';

import { Error404Component } from './error404.component';

@NgModule({
  imports: [RouterModule, CommonModule, OutsideModule],
  declarations: [Error404Component],
  providers: [],
  bootstrap: [Error404Component],
})
export class Error404Module {}
