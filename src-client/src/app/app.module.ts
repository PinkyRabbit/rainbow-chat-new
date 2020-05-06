import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppStoreModule } from './app-store.module';
import { CoreModule } from './core/core.module';
import { NavbarModule } from './core/components/navbar/navbar.module';
import { LoaderComponent } from './core/components/loader/loader.component';

const COMPONENTS = [NavbarModule];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    AppStoreModule,
    AngularSvgIconModule.forRoot(),
    ...COMPONENTS,
  ],
  providers: [],
  declarations: [AppComponent, LoaderComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
