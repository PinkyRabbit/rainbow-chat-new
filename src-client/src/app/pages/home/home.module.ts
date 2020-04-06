import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';

import { OutsideModule } from 'app/modules/outside/outside.module';

@NgModule({
  imports: [RouterModule, OutsideModule],
  declarations: [HomeComponent, LoginComponent],
  providers: [],
  bootstrap: [HomeComponent],
})
export class HomeModule {}
