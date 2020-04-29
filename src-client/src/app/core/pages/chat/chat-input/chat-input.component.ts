import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: '#text-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['chat-input.component.scss'],
})
export class ChatInputComponent implements OnInit {
  message = '';

  constructor() {}

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
}
