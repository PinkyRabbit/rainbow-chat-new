import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';

import { OutsideLogoComponent } from 'app/components/outside/logo/outside.logo.component';

@NgModule({
  imports: [RouterModule],
  declarations: [HomeComponent, LoginComponent, OutsideLogoComponent],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule {}
