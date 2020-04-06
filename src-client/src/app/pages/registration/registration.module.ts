import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RegistrationComponent } from './registration.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

import { OutsideModule } from 'app/modules/outside/outside.module';

@NgModule({
  imports: [RouterModule, FormsModule, HttpClientModule, OutsideModule],
  declarations: [RegistrationComponent, RegistrationFormComponent],
  providers: [],
  bootstrap: [RegistrationComponent],
})
export class RegistrationModule {}
