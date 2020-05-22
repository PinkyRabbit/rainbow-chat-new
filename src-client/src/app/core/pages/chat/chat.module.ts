import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { InsideModule } from 'app/core/layouts/inside.module';
import { NavbarUserControlSerivce } from 'app/core/components/navbar/navbar-user-control.service';
import { SettingsService } from 'app/shared/services/settings/settings.service';
import { ChatMessagesService } from 'app/shared/modules/chat/messages/messages.service';

import { ChatComponent } from './chat.component';
import { ChatSingleMessageModule } from './messages/message/chat-single-message.module';
import { ChatUserBoxModule } from './users/chat-user-box/chat-user-box.module';
import { ChatMessagesComponent } from './messages/chat-messages.component';
import { ChatUsersComponent } from './users/chat-users.component';
import { ChatInputComponent } from './chat-input/chat-input.component';

@NgModule({
  imports: [
    RouterModule,
    InsideModule,
    CommonModule,
    FormsModule,
    AngularSvgIconModule,
    ChatSingleMessageModule,
    ChatUserBoxModule,
  ],
  declarations: [
    ChatComponent,
    ChatMessagesComponent,
    ChatUsersComponent,
    ChatInputComponent,
  ],
  providers: [ChatMessagesService, NavbarUserControlSerivce, SettingsService],
  bootstrap: [ChatComponent],
})
export class ChatModule {}
