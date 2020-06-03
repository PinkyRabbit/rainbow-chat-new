import { NgModule } from '@angular/core';

import { ChatUserBoxComponent } from './chat-user-box.component';
import { CommonModule } from '@angular/common';
import { UsernameToMessageService } from 'app/shared/services/username-to-message.service';

const components = [ChatUserBoxComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [...components],
  providers: [UsernameToMessageService],
  exports: [...components],
})
export class ChatUserBoxModule {}
