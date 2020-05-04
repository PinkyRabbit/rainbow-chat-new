import {
  Component,
  OnInit,
  Input,
  HostBinding,
  Output,
  EventEmitter,
} from '@angular/core';
import { Router } from '@angular/router';

import { UserModel } from 'app/shared/models/user.model';

@Component({
  selector: 'div[chat-user-box]',
  templateUrl: './chat-user-box.component.html',
  styleUrls: ['chat-user-box.component.scss'],
})
export class ChatUserBoxComponent implements OnInit {
  @Input() user: UserModel;
  @Output() selectUserForInput: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router) {}

  @HostBinding('class.box')
  @HostBinding('class.is-size-7')
  @HostBinding('class.is-multiline')
  ngOnInit() {}

  selectUsername() {
    this.selectUserForInput.emit(this.user.username);
  }
}
