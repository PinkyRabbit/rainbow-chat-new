import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { UserModel } from 'app/shared/models/user.model';
import { ChatMessageModel } from 'app/shared/models/chat-message.model';
import { SubSink } from 'subsink';
import { ChatMessagesService } from 'app/shared/modules/chat/messages/messages.service';

@Component({
  selector: '#chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['chat-messages.component.scss'],
})
export class ChatMessagesComponent implements OnInit, OnDestroy {
  @Input() baseStyles: any;

  /*
https://stackoverflow.com/a/54162804/7196144

import { ScrollDispatcher } from '@angular/cdk/scrolling';

  constructor(private scrollDispatcher: ScrollDispatcher) {
    this.scrollDispatcher.scrolled().subscribe(x => console.log('I am scrolling'));
  }
  */

  private subs = new SubSink();

  private chuckNorris: UserModel = {
    _id: '1',
    username: 'Chuck Norris',
    firstName: 'Chuck',
    nameColor: '34,78,75',
    nameFont: 'font-1',
    textColor: '160,100,75',
    textFont: 'font-2',
    avatar: '',
  };
  private hisFriend: UserModel = {
    _id: '2',
    username: 'to',
    firstName: 'Firend',
    nameColor: '60,100,50',
    nameFont: 'font-1',
    textColor: '351,100,86',
    textFont: 'font-2',
    avatar: '',
  };
  private itsChuksTurn = true;

  messages: ChatMessageModel[] = [];

  ngOnInit() {
    // this.subs.sink = this.chatMessagesService.roomMessage.subscribe();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  private onNewMessage(msg) {
    // this.messages.push({
    //   _id: id || Date.now().toString(),
    //   date,
    //   message: `${to.username}, ${value}`,
    //   isBanned: false,
    //   from,
    //   to: [to],
    // });
  }

  /*
  private randomSeconds() {
    return Math.round(Math.random() * 10000);
  }

  private fakeChatMessaging() {
    setTimeout(() => {
      this.addRandomJoke();
      this.fakeChatMessaging();
    }, this.randomSeconds());
  }

  private addRandomJoke() {
    this.http.get('https://api.chucknorris.io/jokes/random').subscribe(
      (joke: any) => {
        const date = new Date().toString();
        const { id, value } = joke;
        if (!value) {
          return false;
        }
        // tslint:disable-next-line: variable-name
        const from = Object.assign(
          {},
          this.itsChuksTurn ? this.chuckNorris : this.hisFriend
        );
        from.username = `${from.username}: `;
        const to = this.itsChuksTurn ? this.hisFriend : this.chuckNorris;

        this.messages.push({
          _id: id || Date.now().toString(),
          date,
          message: `${to.username}, ${value}`,
          isBanned: false,
          from,
          to: [to],
        });
        this.itsChuksTurn = !this.itsChuksTurn;
      },
      (error) => console.log(error)
    );
  }
  */

  constructor(
    private router: Router,
    private http: HttpClient,
    private chatMessagesService: ChatMessagesService
  ) {}
}
