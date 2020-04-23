import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { RegistrationComponent } from './registration.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

import { OutsideModule } from 'app/modules/outside/outside.module';
import { AuthService } from 'app/services/auth/auth.service';

@NgModule({
  imports: [CommonModule, FormsModule, HttpClientModule, OutsideModule],
  declarations: [RegistrationComponent, RegistrationFormComponent],
  providers: [AuthService],
  bootstrap: [RegistrationComponent],
})
export class RegistrationModule {}
