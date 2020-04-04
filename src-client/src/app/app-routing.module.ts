import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './modules/outside/errors/error404/error404.component';
import { HomeComponent } from './modules/outside/home/home.component';

// import { HomeComponent } from './modules/home/home.component';
// import { Error404Component } from './modules/errors/error404/error404.component';
// import { RegistrationComponent } from './modules/registration/registration.component';

const routes: Routes = [
  // {
  // path: 'home',
  // redirectTo: 'home',
  // component: HomeComponent,
  // canActivate: [AuthGuard]
  // children: [
  //   {
  //     path: 'status',
  //     loadChildren: './components/home/home.module#HomeModule',
  //     canActivate: [AuthGuard]
  //   }
  // ]
  // },
  // { path: 'id_token', component: AuthenticationComponent },
  // { path: 'auth', component: AuthenticationComponent },
  // { path: 'Unauthorized', component: UnauthorizedComponent },
  // { path: 'login', component: LoginComponent }
  // { path: 'logout', component: LogoutComponent }
  // {
  //   path: 'sign-in',
  //   pathMatch: 'full',
  //   component: RegistrationComponent,
  // },
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
