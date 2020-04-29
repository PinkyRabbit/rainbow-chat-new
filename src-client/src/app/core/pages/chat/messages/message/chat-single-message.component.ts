import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ChatMessage } from 'app/models/chat-message';

@Component({
  selector: '.chat-message',
  templateUrl: './chat-single-message.component.html',
  styleUrls: ['chat-single-message.component.scss'],
})
export class ChatSingleMessageComponent implements OnInit {
  @Input() msg: ChatMessage;
  @Output() clickOnUserInsideMessage: EventEmitter<any> = new EventEmitter<
    any
  >();

  constructor() {}

  ngOnInit() {}

  pickHlsColor(value) {
    const n = value.split(',');
    return `hsl(${n[0]}, ${n[1]}%, ${n[2]}%)`;
  }

  leftClickOnUsername(username) {
    this.clickOnUserInsideMessage.emit(username);
  }
}
