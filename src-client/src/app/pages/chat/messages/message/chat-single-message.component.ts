import { Component, OnInit, Input } from '@angular/core';

import { ChatMessage } from 'app/models/chat-message';

@Component({
  selector: '.chat-message',
  templateUrl: './chat-single-message.component.html',
  styleUrls: ['chat-single-message.component.scss'],
})
export class ChatSingleMessageComponent implements OnInit {
  @Input() msg: ChatMessage;

  constructor() {}

  ngOnInit() {}

  pickHlsColor(value) {
    const n = value.split(',');
    return `hsl(${n[0]}, ${n[1]}%, ${n[2]}%)`;
  }

  /*
  reworkMessage(message) {
    let result = message;
    this.msg.to
      .sort((a, b) => b.username.length - a.username.length)
      .map((recepient, index) => {
        const { username } = recepient;
        const escapedString = this.escapeRegExp(username);
        const regexp = new RegExp(escapedString, 'g');
        result = result.replace(regexp, `%%s${index}%%`);
        return recepient;
      })
      .forEach((recepient, index) => {
        console.log(result);
        const searchString = `%%s${index}%%`;
        const regexp = new RegExp(searchString, 'g');
        const userReplacement = `<span class="user-in-message" [user]="${recepient}">Loadin user-in-message componen...</span>`;
        result = result.replace(regexp, userReplacement);
      });
    return result;
  }
  */

  // reworkMessage(message) {
  //   let result = message;
  //   this.msg.to
  //     .sort((a, b) => b.username.length - a.username.length)
  //     .map((recepient, index) => {
  //       const { username } = recepient;
  //       const escapedString = this.escapeRegExp(username);
  //       const regexp = new RegExp(escapedString, 'g');
  //       result = result.replace(regexp, `%%s${index}%%`);
  //       return recepient;
  //     })
  //     .forEach((recepient, index) => {
  //       this.userInMessage.viewContainerRef.clear();
  //       const userInMessageCurrentComponent = this.componentFactoryResolver.resolveComponentFactory(
  //         UserInMessageComponent
  //       );
  //       const userInMessageComponentRef = this.userInMessage.viewContainerRef.createComponent(
  //         userInMessageCurrentComponent
  //       );
  //       (userInMessageComponentRef.instance as UserInMessageComponent).user = recepient;

  //       const searchString = `%%s${index}%%`;
  //       const regexp = new RegExp(searchString, 'g');

  //       result = result.replace(regexp, userInMessageComponentRef);
  //     });

  //   return result;
  // this.book.viewContainerRef.clear();

  // const bookItemComponent = this.componentFactoryResolver.resolveComponentFactory(BookItemComponent);
  // const bookItemComponentRef = this.book.viewContainerRef.createComponent(bookItemComponent);

  // ( bookItemComponentRef.instance as BookItemComponent).value = {
  //   title: 'Great Expectations',
  //   author: 'Charles Dickens'
  // };
  // }

  // private escapeRegExp(str) {
  //   return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // }
}
