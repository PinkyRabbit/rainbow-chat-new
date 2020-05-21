import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ColorPickerModule } from 'ngx-color-picker';

import { ChatSingleMessageModule } from 'app/core/pages/chat/messages/message/chat-single-message.module';
import { ChatUserBoxModule } from 'app/core/pages/chat/users/chat-user-box/chat-user-box.module';
import { SettingsService } from 'app/shared/services/settings/settings.service';

import { NavbarComponent } from './navbar.component';
import { NavbarSettingsComponent } from './user/navbar-user.component';
import { NavbarChatsComponent } from './chats/navbar-chats.component';
import { NavbarNotificationsComponent } from './notifications/navbar-notifications.component';
import { ModalSettingsComponent } from './user/modal-settings/modal-settings.component';
import { UserBoxSettingsComponent } from './user/modal-settings/user-box-settings/user-box-settings.component';
import { MessageSettingsComponent } from './user/modal-settings/message-settings/message-settings.component';
import { AvatarSettingsComponent } from './user/modal-settings/avatar-settings/avatar-settings.component';
import { NavbarUserControlSerivce } from './navbar-user-control.service';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    BrowserAnimationsModule,
    AngularSvgIconModule,
    ColorPickerModule,
    ChatSingleMessageModule,
    ChatUserBoxModule,
  ],
  declarations: [
    NavbarComponent,
    NavbarSettingsComponent,
    NavbarChatsComponent,
    NavbarNotificationsComponent,
    ModalSettingsComponent,
    UserBoxSettingsComponent,
    MessageSettingsComponent,
    AvatarSettingsComponent,
  ],
  providers: [NavbarUserControlSerivce, SettingsService],
  exports: [NavbarComponent],
  bootstrap: [NavbarComponent],
})
export class NavbarModule {}
