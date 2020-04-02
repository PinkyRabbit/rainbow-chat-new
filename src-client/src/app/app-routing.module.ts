import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
    // canActivate: [AuthGuard]
    // children: [
    //   {
    //     path: 'status',
    //     loadChildren: './components/home/home.module#HomeModule',
    //     canActivate: [AuthGuard]
    //   }
    // ]
  }
  // { path: 'id_token', component: AuthenticationComponent },
  // { path: 'auth', component: AuthenticationComponent },
  // { path: 'Unauthorized', component: UnauthorizedComponent },
  // { path: 'login', component: LoginComponent }
  // { path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
