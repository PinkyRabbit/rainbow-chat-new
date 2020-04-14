import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { InsideModule } from 'app/modules/inside/inside.module';

import { ChatComponent } from './chat.component';
import { NavbarModule } from 'app/components/navbar/navbar.module';
import { ChatMessagesComponent } from './messages/chat-messages.component';
import { ChatSingleMessageComponent } from './messages/message/chat-single-message.component';
import { ChatUsersComponent } from './users/chat-users.component';
import { UserInMessageComponent } from './messages/message/user-in-message/user-in-message.component';
import { TextInMessageComponent } from './messages/message/text-in-message/text-in-message.component';
import { ChunkInMessageDirective } from './messages/message/text-in-message/chunk-in-message.directive';
import { TextNodeComponent } from './messages/message/text-in-message/text-node';

@NgModule({
  imports: [CommonModule, RouterModule, InsideModule, NavbarModule],
  declarations: [
    ChatComponent,
    ChatMessagesComponent,
    ChatUsersComponent,
    ChatSingleMessageComponent,
    UserInMessageComponent,
    TextInMessageComponent,
    TextNodeComponent,
    ChunkInMessageDirective,
  ],
  providers: [],
  bootstrap: [ChatComponent],
})
export class ChatModule {}
