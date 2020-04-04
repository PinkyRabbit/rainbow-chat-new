import { NgModule } from '@angular/core';

import { OutsideComponent } from './outside.component';
import { OutsideLogoComponent } from './components/logo/outside.logo.component';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [OutsideComponent, OutsideLogoComponent],
  providers: [OutsideLogoComponent],
  imports: [HomeModule],
  bootstrap: [OutsideComponent],
})
export class OutsideModule {}
