import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ChatMessageModel } from 'app/shared/models/chat-message.model';
import { UsernameToMessageService } from 'app/shared/services/username-to-message.service';

@Component({
  selector: '.chat-message',
  templateUrl: './chat-single-message.component.html',
  styleUrls: ['chat-single-message.component.scss'],
})
export class ChatSingleMessageComponent implements OnInit {
  @Input() msg: ChatMessageModel;

  constructor(private usernameToMessageService: UsernameToMessageService) {}

  ngOnInit() {}

  pickHlsColor(value) {
    const n = value.split(',');
    return `hsl(${n[0]}, ${n[1]}%, ${n[2]}%)`;
  }

  leftClickOnUsername(username) {
    this.usernameToMessageService.selectUsername(username);
  }
}
