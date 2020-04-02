import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [HomeComponent, LoginComponent],
  providers: [LoginComponent],
  imports: [],
  bootstrap: [HomeComponent]
})
export class HomeModule {}
