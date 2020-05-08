import { NgModule } from '@angular/core';

import { ChatUserBoxComponent } from './chat-user-box.component';

const components = [ChatUserBoxComponent];

@NgModule({
  imports: [],
  declarations: [...components],
  exports: [...components],
})
export class ChatUserBoxModule {}
