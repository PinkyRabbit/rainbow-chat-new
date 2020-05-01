import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

import { RegistrationComponent } from './registration.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

import { OutsideModule } from 'app/core/layouts/outside.module';
import { HttpWithLoaderService } from 'app/services/http/with-loader.service';
// import { AuthService } from 'app/services/auth/auth.service';

@NgModule({
  imports: [CommonModule, FormsModule, HttpClientModule, OutsideModule],
  declarations: [RegistrationComponent, RegistrationFormComponent],
  providers: [Title, HttpWithLoaderService],
  // providers: [AuthService],
  bootstrap: [RegistrationComponent],
})
export class RegistrationModule {}
