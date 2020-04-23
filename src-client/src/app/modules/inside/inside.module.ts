import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarModule } from 'app/components/navbar/navbar.module';
import { NavbarComponent } from 'app/components/navbar/navbar.component';

@NgModule({
  imports: [CommonModule, NavbarModule],
  declarations: [],
  exports: [NavbarComponent],
})
export class InsideModule {}
