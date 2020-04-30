import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { AuthInterceptor } from './services/auth/auth.interceptor';
import { CoreModule } from './core/core.module';

import { NavbarModule } from './core/components/navbar/navbar.module';
import { LoaderComponent } from './core/components/loader/loader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const COMPONENTS = [NavbarModule];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    ...COMPONENTS,
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true,
    // },
    // {
    //   provide: JwtHelperService,
    //   useValue: new JwtHelperService(),
    // },
  ],
  declarations: [AppComponent, LoaderComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
