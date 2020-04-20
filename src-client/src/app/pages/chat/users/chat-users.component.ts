import {
  Component,
  OnInit,
  Input,
  HostBinding,
  Output,
  EventEmitter,
} from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'app/models/user';

@Component({
  selector: '#chat-users',
  templateUrl: './chat-users.component.html',
  styleUrls: ['chat-users.component.scss'],
})
export class ChatUsersComponent implements OnInit {
  @Input() baseStyles: any;
  @Output() addUsernameToMessage: EventEmitter<any> = new EventEmitter<any>();

  isUserOnTablet = false;
  chatUsers: User[];

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

  constructor(private router: Router) {
    this.chatUsers = [this.chuckNorris, this.hisFriend];
  }

  @HostBinding('class.is-one-fifth')
  isOneFifth: boolean;
  @HostBinding('class.is-users-on-tablet')
  isUsersOnTabletClass: boolean;
  @HostBinding('class.column')
  ngOnInit() {
    this.onInitAndOnResize(null);
  }

  private isOnTabletFunc() {
    const windowWidth =
      document.body.clientWidth ||
      document.documentElement.clientWidth ||
      window.innerWidth;

    return windowWidth < 1010;
  }

  onInitAndOnResize(e) {
    setTimeout(() => {
      this.isUserOnTablet = this.isOnTabletFunc();
      if (this.isUserOnTablet) {
        this.isOneFifth = false;
        this.isUsersOnTabletClass = true;
      } else {
        this.isOneFifth = true;
        this.isUsersOnTabletClass = false;
      }
    }, 300);
  }

  selectUserForInput(username) {
    this.addUsernameToMessage.emit(username);
  }
}
