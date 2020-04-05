import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RegistrationComponent } from './registration.component';

import { OutsideLogoComponent } from 'app/components/outside/logo/outside.logo.component';

@NgModule({
  imports: [RouterModule],
  declarations: [RegistrationComponent, OutsideLogoComponent],
  providers: [],
  bootstrap: [RegistrationComponent],
})
export class RegistrationModule {}
