import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppStoreModule } from './app-store.module';
import { CoreModule } from './core/core.module';
import { NavbarModule } from './core/components/navbar/navbar.module';
import { LoaderComponent } from './core/components/loader/loader.component';
import { SettingsService } from './shared/services/settings/settings.service';

const config: SocketIoConfig = { url: 'http://localhost:8988', options: {} };

const COMPONENTS = [NavbarModule];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    AppStoreModule,
    AngularSvgIconModule.forRoot(),
    SocketIoModule.forRoot(config),
    ...COMPONENTS,
  ],
  providers: [SettingsService],
  declarations: [AppComponent, LoaderComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
