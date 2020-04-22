import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Error404Component } from './pages/error404/error404.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ChatComponent } from './pages/chat/chat.component';
import { EditUserComponent } from './pages/user/edit/edit-user.component';

const routes: Routes = [
  {
    path: 'user',
    pathMatch: 'full',
    component: EditUserComponent,
  },
  {
    path: 'chat/:chatSlug',
    pathMatch: 'full',
    component: ChatComponent,
  },
  {
    path: 'sign-in',
    pathMatch: 'full',
    component: RegistrationComponent,
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
