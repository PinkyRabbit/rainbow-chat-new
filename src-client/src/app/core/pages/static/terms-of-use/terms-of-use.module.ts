import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

import { OutsideModule } from 'app/core/layouts/outside.module';

import { TermsOfUseComponent } from './terms-of-use.component';

@NgModule({
  imports: [CommonModule, OutsideModule],
  declarations: [TermsOfUseComponent],
  providers: [Title],
  bootstrap: [TermsOfUseComponent],
})
export class TermsOfUseModule {}
