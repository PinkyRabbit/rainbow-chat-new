import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';

import { ChatMessageModel } from 'app/shared/models/chat-message.model';

@Component({
  selector: '#chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['chat-messages.component.scss'],
})
export class ChatMessagesComponent implements OnInit, OnDestroy, OnChanges {
  @Input() baseStyles: any;
  @Input() messages: ChatMessageModel[];

  ngOnInit() {}

  ngOnChanges(changes) {
    console.log('ChatMessagesComponent -> changes');
    console.log(changes);
  }

  ngOnDestroy() {}

  constructor() {}

  /*
  https://stackoverflow.com/a/54162804/7196144

  import { ScrollDispatcher } from '@angular/cdk/scrolling';

  constructor(private scrollDispatcher: ScrollDispatcher) {
    this.scrollDispatcher.scrolled().subscribe(x => console.log('I am scrolling'));
  }
  */
}
