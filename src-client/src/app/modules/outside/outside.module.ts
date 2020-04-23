import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { OutsideLogoComponent } from 'app/components/outside/logo/outside.logo.component';
import { OutsideFooterComponent } from 'app/components/outside/footer/outside.footer.component';
import { OutsidePageHeaderComponent } from 'app/components/outside/page-header/outside.page-header.component';
import { OutsideStartsComponent } from 'app/components/outside/stars/outside.stars.component';
import { OutsideLoaderLigthComponent } from 'app/components/outside/loader-light/outside.loader-light.component';
import { NavbarModule } from 'app/components/navbar/navbar.module';

@NgModule({
  imports: [RouterModule, CommonModule, NavbarModule],
  providers: [NavbarModule],
  declarations: [
    OutsideLogoComponent,
    OutsideFooterComponent,
    OutsidePageHeaderComponent,
    OutsideStartsComponent,
    OutsideLoaderLigthComponent,
  ],
  exports: [
    OutsideLogoComponent,
    OutsideFooterComponent,
    OutsidePageHeaderComponent,
    OutsideStartsComponent,
    OutsideLoaderLigthComponent,
  ],
})
export class OutsideModule {}
