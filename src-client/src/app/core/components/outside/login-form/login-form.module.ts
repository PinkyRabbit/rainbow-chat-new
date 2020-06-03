import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LoginFormComponent } from './login-form.component';

export const COMPONENTS = [LoginFormComponent];

@NgModule({
  imports: [RouterModule, CommonModule, FormsModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class LoginFormModule {}
