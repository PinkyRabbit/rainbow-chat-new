import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutsideLogoComponent } from 'app/components/outside/logo/outside.logo.component';
import { OutsideFooterComponent } from 'app/components/outside/footer/outside.footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [OutsideLogoComponent, OutsideFooterComponent],
  exports: [OutsideLogoComponent, OutsideFooterComponent],
})
export class OutsideModule {}
