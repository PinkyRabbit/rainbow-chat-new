import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { NavbarComponent } from './navbar.component';
import { NavbarSettingsComponent } from './settings/navbar-settings.component';
import { NavbarSettingsChangeSoundComponent } from './settings/change-sound/change-sound.component';
import { NavbarSettingsChangeFontComponent } from './settings/change-font/change-font.component';
import { NavbarChatsComponent } from './chats/navbar-chats.component';
import { NavbarNotificationsComponent } from './notifications/navbar-notifications.component';

@NgModule({
  imports: [RouterModule, CommonModule, AngularSvgIconModule],
  declarations: [
    NavbarComponent,
    NavbarSettingsComponent,
    NavbarSettingsChangeSoundComponent,
    NavbarSettingsChangeFontComponent,
    NavbarChatsComponent,
    NavbarNotificationsComponent,
  ],
  exports: [NavbarComponent],
  bootstrap: [NavbarComponent],
})
export class NavbarModule {}
