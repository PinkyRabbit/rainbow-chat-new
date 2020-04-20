import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ChatMessage } from 'app/models/chat-message';
import { User } from 'app/models/user';

@Component({
  selector: '#chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['chat-messages.component.scss'],
})
export class ChatMessagesComponent implements OnInit {
  @Input() baseStyles: any;
  @Output() addUsernameToMessage: EventEmitter<any> = new EventEmitter<any>();

  private chuckNorris: User = {
    _id: '1',
    username: 'Chuck Norris',
    nameColor: '34,78,75',
    nameFont: 'font-1',
    textColor: '160,100,75',
    textFont: 'font-2',
  };
  private hisFriend: User = {
    _id: '2',
    username: 'to',
    nameColor: '60,100,50',
    nameFont: 'font-1',
    textColor: '351,100,86',
    textFont: 'font-2',
  };
  private itsChuksTurn = true;

  messages: ChatMessage[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.addRandomJoke();
    this.addRandomJoke();
    this.addRandomJoke();
    this.addRandomJoke();
    this.addRandomJoke();
    this.addRandomJoke();
    this.addRandomJoke();
    this.addRandomJoke();
    this.addRandomJoke();
    this.addRandomJoke();
    this.addRandomJoke();
    // this.addRandomJoke();
    // this.addRandomJoke();
    // this.addRandomJoke();
    // this.addRandomJoke();
    // this.addRandomJoke();
    // this.fakeChatMessaging();
  }

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

  clickOnUserInsideMessage(username) {
    this.addUsernameToMessage.emit(username);
  }
}
