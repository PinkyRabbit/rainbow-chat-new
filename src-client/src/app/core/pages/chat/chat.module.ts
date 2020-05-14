import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { InsideModule } from 'app/core/layouts/inside.module';

import { ChatComponent } from './chat.component';
import { NavbarModule } from 'app/core/components/navbar/navbar.module';
import { ChatMessagesComponent } from './messages/chat-messages.component';
// import { ChatSingleMessageComponent } from './messages/message/chat-single-message.component';
import { ChatUsersComponent } from './users/chat-users.component';
// import { UserInMessageComponent } from './messages/message/user-in-message/user-in-message.component';
// import { TextInMessageComponent } from './messages/message/text-in-message/text-in-message.component';
// import { ChunkInMessageDirective } from './messages/message/text-in-message/chunk-in-message.directive';
// import { TextNodeComponent } from './messages/message/text-in-message/text-node';
// import { ChatUserBoxComponent } from './users/chat-user-box/chat-user-box.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { ChatSingleMessageModule } from './messages/message/chat-single-message.module';
import { ChatUserBoxModule } from './users/chat-user-box/chat-user-box.module';
import { ChatMessagesService } from 'app/shared/modules/chat/messages/messages.service';

@NgModule({
  imports: [
    RouterModule,
    InsideModule,
    NavbarModule,
    CommonModule,
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
  providers: [ChatMessagesService],
  bootstrap: [ChatComponent],
})
export class ChatModule {}