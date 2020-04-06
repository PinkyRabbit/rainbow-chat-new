import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RegistrationComponent } from './registration.component';

import { OutsideModule } from 'app/modules/outside/outside.module';

@NgModule({
  imports: [RouterModule, OutsideModule],
  declarations: [RegistrationComponent],
  providers: [],
  bootstrap: [RegistrationComponent],
})
export class RegistrationModule {}
