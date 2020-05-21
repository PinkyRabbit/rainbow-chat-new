import {
  Component,
  OnInit,
  HostBinding,
  Input,
  ElementRef,
} from '@angular/core';
import { SubSink } from 'subsink';

import { MeModel } from 'app/shared/models/me.model';
import { ChatMessagesService } from 'app/shared/modules/chat/messages/messages.service';
import { UsernameToMessageService } from 'app/shared/services/username-to-message.service';

@Component({
  selector: 'footer[#text-input]',
  templateUrl: './chat-input.component.html',
  styleUrls: ['chat-input.component.scss'],
})
export class ChatInputComponent implements OnInit {
  @Input() user: MeModel;

  private subs = new SubSink();
  private input;
  message = '';

  constructor(
    private chatMessagesService: ChatMessagesService,
    private usernameToMessageService: UsernameToMessageService,
    private el: ElementRef
  ) {}

  ngAfterViewInit() {
    const hostElem = this.el.nativeElement;
    this.input = hostElem.getElementsByTagName('input')[0];
  }

  // https://stackoverflow.com/questions/43009619/google-cloud-speech-api-word-hints
  // https://cloud.google.com/speech-to-text/docs/basics#phrase-hints
  // https://css-tricks.com/textarea-tricks/

  @HostBinding('class.field')
  @HostBinding('class.has-addons')
  ngOnInit() {
    this.subscribeToNewUser();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  private subscribeToNewUser() {
    this.subs.sink = this.usernameToMessageService.getUsernameFromClick$.subscribe(
      (username) => {
        if (username) {
          this.addUsernameToInput(username);
          this.moveCursorToEnd();
        }
      }
    );
  }

  private addUsernameToInput(username: string) {
    if (username.slice(-2) === ': ') {
      username = username.slice(0, username.length - 2);
    }
    this.message = `${this.message}${username}, `;
  }

  private moveCursorToEnd() {
    if (typeof this.input.selectionStart === 'number') {
      this.input.selectionStart = this.input.selectionEnd = this.input.value.length;
    }
    this.input.focus();
    if (!['number', 'undefined'].includes(typeof this.input.createTextRange)) {
      const range = this.input.createTextRange();
      range.collapse(false);
      range.select();
    }
  }

  sendMessage(e) {
    e.preventDefault();
    // return this.messagesService.sendMessage('123');
  }
}
