import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutsideLogoComponent } from 'app/components/outside/logo/outside.logo.component';
import { OutsideFooterComponent } from 'app/components/outside/footer/outside.footer.component';
import { OutsidePageHeaderComponent } from 'app/components/outside/page-header/outside.page-header.component';
import { OutsideStartsComponent } from 'app/components/outside/stars/outside.stars.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    OutsideLogoComponent,
    OutsideFooterComponent,
    OutsidePageHeaderComponent,
    OutsideStartsComponent,
  ],
  exports: [
    OutsideLogoComponent,
    OutsideFooterComponent,
    OutsidePageHeaderComponent,
    OutsideStartsComponent,
  ],
})
export class OutsideModule {}
