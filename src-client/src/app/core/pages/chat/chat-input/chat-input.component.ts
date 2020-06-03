import {
  Component,
  OnInit,
  HostBinding,
  Input,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { SubSink } from 'subsink';

import { UserForBox } from 'app/shared/models/user-for-box.model';
import { ChatMessagesService } from 'app/shared/modules/chat/messages/messages.service';
import { UsernameToMessageService } from 'app/shared/services/username-to-message.service';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'footer[#text-input]',
  templateUrl: './chat-input.component.html',
  styleUrls: ['chat-input.component.scss'],
})
export class ChatInputComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() chatUsers: UserForBox[];
  @Input() roomSlug: string;

  private subs = new SubSink();
  private input;
  public message: string;
  public isMessageSend: boolean;

  constructor(
    private el: ElementRef,
    private socket: Socket,
    private chatMessagesService: ChatMessagesService,
    private usernameToMessageService: UsernameToMessageService
  ) {}

  @HostBinding('class.field')
  @HostBinding('class.has-addons')
  ngOnInit() {
    this.isMessageSend = false;
    this.message = '';
    this.subscribeToNewUser();
  }

  ngAfterViewInit() {
    const hostElem = this.el.nativeElement;
    this.input = hostElem.getElementsByTagName('input')[0];
  }

  // https://stackoverflow.com/questions/43009619/google-cloud-speech-api-word-hints
  // https://cloud.google.com/speech-to-text/docs/basics#phrase-hints
  // https://css-tricks.com/textarea-tricks/

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

    const message = this.message.replace(/\s+/g, ' ').trim();
    if (!message.length) {
      return false;
    }
    this.isMessageSend = true;
    const usersInMessage = [];
    let messageForPlaceholders = message;
    this.chatUsers
      .sort((a, b) => b.username.length - a.username.length)
      .forEach((user, index) => {
        const usernameRegexp = new RegExp(
          this.escapeRegExp(user.username),
          'g'
        );
        if (usernameRegexp.test(messageForPlaceholders)) {
          usersInMessage.push(user._id);
          messageForPlaceholders = messageForPlaceholders.replace(
            usernameRegexp,
            `%%${index}%%`
          );
        }
      });

    this.subs.sink = this.chatMessagesService
      .sendMessageToRoom(this.roomSlug, {
        message,
        usersInMessage,
      })
      .subscribe(
        (_) => {
          this.isMessageSend = false;
          this.message = '';
        },
        (error) => {
          this.isMessageSend = false;
          console.log(error);
        }
      );
  }

  private escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}
