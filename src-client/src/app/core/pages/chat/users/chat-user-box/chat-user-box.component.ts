import {
  Component,
  OnInit,
  Input,
  HostBinding,
  Output,
  EventEmitter,
} from '@angular/core';
import { Router } from '@angular/router';

import { UserForBox } from 'app/shared/models/user-for-box.model';
import { UsernameToMessageService } from 'app/shared/services/username-to-message.service';

@Component({
  selector: 'div[chat-user-box]',
  templateUrl: './chat-user-box.component.html',
  styleUrls: ['chat-user-box.component.scss'],
})
export class ChatUserBoxComponent implements OnInit {
  @Input() user: UserForBox;

  constructor(
    private router: Router,
    private usernameToMessageService: UsernameToMessageService
  ) {}

  get userPublicInfo() {
    const infoKeys = ['age', 'city'];
    return infoKeys
      .filter((key) => this.user[key])
      .map((key) => this.user[key])
      .join(', ');
  }

  get usernameClasses() {
    return `username ${this.user.nameFont}`;
  }

  @HostBinding('class.box')
  @HostBinding('class.is-size-7')
  @HostBinding('class.is-multiline')
  ngOnInit() {}

  selectUsername() {
    this.usernameToMessageService.selectUsername(this.user.username);
  }

  pickHlsColor(value) {
    const n = value.split(',');
    return `hsl(${n[0]}, ${n[1]}%, ${n[2]}%)`;
  }
}
