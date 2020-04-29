import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { OutsideLogoComponent } from '../components/outside/logo/outside.logo.component';
import { OutsideFooterComponent } from '../components/outside/footer/outside.footer.component';
import { OutsidePageHeaderComponent } from '../components/outside/page-header/outside.page-header.component';
import { OutsideStartsComponent } from '../components/outside/stars/outside.stars.component';
import { OutsideLoaderLigthComponent } from '../components/outside/loader-light/outside.loader-light.component';

export const COMPONENTS = [
  OutsideLogoComponent,
  OutsideFooterComponent,
  OutsidePageHeaderComponent,
  OutsideStartsComponent,
  OutsideLoaderLigthComponent,
];

@NgModule({
  imports: [RouterModule, CommonModule],
  providers: [],
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
})
export class OutsideModule {}
