import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AuthGuard } from './guards';
import { Error404Component } from './core/pages/errors/error404/error404.component';
import { HomeComponent } from './core/pages/home/home.component';
// import { RegistrationComponent } from './core/pages/registration/registration.component';
// import { ChatComponent } from './core/pages/chat/chat.component';
// import { EditUserComponent } from './core/pages/user/edit/edit-user.component';
import { Error401Component } from './core/pages/errors/error401/error401.component';

const routes: Routes = [
  /*
  {
    path: 'user',
    pathMatch: 'full',
    component: EditUserComponent,
  },
  {
    canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    path: 'chat/:chatSlug',
    pathMatch: 'full',
    component: ChatComponent,
  },
  {
    path: 'sign-in',
    pathMatch: 'full',
    component: RegistrationComponent,
  },
  */
  {
    path: 'unauthorized',
    pathMatch: 'full',
    component: Error401Component,
  },
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
