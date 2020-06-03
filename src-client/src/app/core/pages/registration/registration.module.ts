import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { RegistrationComponent } from './registration.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

import { OutsideModule } from 'app/core/layouts/outside.module';
// import { HttpAuthService } from '../old/services/http';
// import { AuthService } from 'app/services/auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule,
    OutsideModule,
  ],
  declarations: [RegistrationComponent, RegistrationFormComponent],
  providers: [Title],
  // providers: [AuthService],
  bootstrap: [RegistrationComponent],
})
export class RegistrationModule {}
