import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
// import { CommonModule } from '@angular/common';

@NgModule({
  imports: [RouterModule],
  declarations: [HomeComponent, LoginComponent],
  providers: [LoginComponent],
  bootstrap: [HomeComponent],
})
export class HomeModule {}
