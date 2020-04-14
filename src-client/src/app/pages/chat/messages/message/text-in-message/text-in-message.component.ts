import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
} from '@angular/core';

import { User } from 'app/models/user';

import { ChunkInMessageDirective } from './chunk-in-message.directive';
import { UserInMessageComponent } from '../user-in-message/user-in-message.component';
import { TextNodeComponent } from './text-node';

@Component({
  selector: '[text-in-message]',
  // templateUrl: './text-in-message.component.html',
  template: `
    <div>
      <ng-template chunk></ng-template>
    </div>
  `,
  styleUrls: ['text-in-message.component.scss'],
})
export class TextInMessageComponent implements OnInit {
  @Input() message: string;
  @Input() users: User[];
  // @ViewChild(ChunkInMessageDirective)
  // chunkOfMessage: ChunkInMessageDirective;
  @ViewChild(ChunkInMessageDirective, { static: true })
  appHost: ChunkInMessageDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  // @ViewChild(ChunkInMessageDirective, { static: true, read: ViewContainerRef })

  ngOnInit() {
    this.loadStringByChunks();
  }

  loadStringByChunks() {
    const [user] = this.users;

    const userInMessageFactory = this.componentFactoryResolver.resolveComponentFactory(
      UserInMessageComponent
    );

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      TextNodeComponent
    );
    const viewContainerRef = this.appHost.viewContainerRef;

    // const viewContainerRef = this.chunkOfMessage.viewContainerRef;
    // viewContainerRef.clear();

    console.log(viewContainerRef);

    /*
    const message = this.message;

    const users = this.users
      .sort((a, b) => b.username.length - a.username.length)
      .map((recepient, index) => {
        const { username } = recepient;
        const escapedString = this.escapeRegExp(username);
        const regexp = new RegExp(escapedString, 'g');
        message = message.replace(regexp, `%%s${index}%%`);
        return recepient;
      });

    const searchUsernameRegexp = /%%s\d+%%/;
    let antiInfinityLoopCounter = 0;
    while (message.length && antiInfinityLoopCounter < 50) {
      const nextUsernameIndex = message.search(searchUsernameRegexp);
      console.log(`nextUsernameIndex = ${nextUsernameIndex}`);

      if (nextUsernameIndex === 0) {
        const extractedUser = /%%s(\d+)%%/.exec(message);
        const [toDeletion, userIndex] = extractedUser;
        message = message.replace(toDeletion, '');
        console.log('toDeletion');
        console.log(toDeletion);
        console.log(message);

        const userInMessageFactory = this.componentFactoryResolver.resolveComponentFactory(
          UserInMessageComponent
        );

        const { viewContainerRef } = this.chunkOfMessage;
        viewContainerRef.clear();

        const userInMessageComponentRef: any = viewContainerRef.createComponent(
          userInMessageFactory
        );
        console.log(this.users[userIndex]);
        (userInMessageComponentRef.instance as UserInMessageComponent).user = this.users[
          userIndex
        ];

        antiInfinityLoopCounter += 1;
        continue;
      }

      /*
      let text = message;
      if (nextUsernameIndex !== -1) {
        text = message.slice(0, nextUsernameIndex);
        message = message.slice(nextUsernameIndex);
      }

      const textNodeFactory = this.componentFactoryResolver.resolveComponentFactory(
        TextNodeComponent
      );
      const textNodeComponentRef: any = viewContainerRef.createComponent(
        textNodeFactory
      );
      (textNodeComponentRef.instance as TextNodeComponent).text = text;



      antiInfinityLoopCounter += 1;
    }
          */
  }

  private escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}

/*



    .forEach((recepient, index) => {
      const searchString = `%%s${index}%%`;
      const regexp = new RegExp(searchString, 'g');

      const userInMessageFactory = this.componentFactoryResolver.resolveComponentFactory(
        UserInMessageComponent
      );
      const userInMessageComponentRef: any = this.userInMessage.viewContainerRef.createComponent(
        userInMessageFactory
      );
      (userInMessageComponentRef.instance as UserInMessageComponent).user = recepient;

      message = message.replace(regexp, userInMessageComponentRef);
    });
    console.log(textNodes);
    this.message = message;
*/
