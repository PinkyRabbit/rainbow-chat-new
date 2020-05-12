import { Component, OnInit, HostBinding } from '@angular/core';
import { ChatMessagesService } from 'app/shared/modules/chat/messages/messages.service';

@Component({
  selector: '#text-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['chat-input.component.scss'],
})
export class ChatInputComponent implements OnInit {
  message = '';

  constructor(private chatMessagesService: ChatMessagesService) {}

  // https://css-tricks.com/textarea-tricks/

  @HostBinding('class.field')
  @HostBinding('class.has-addons')
  ngOnInit() {}

  addUsernameToInput(username: string) {
    if (username.slice(-2) === ': ') {
      username = username.slice(0, username.length - 2);
    }
    this.message = `${this.message}${username}, `;
  }

  sendMessage(e) {
    e.preventDefault();
    // return this.messagesService.sendMessage('123');
  }
}
