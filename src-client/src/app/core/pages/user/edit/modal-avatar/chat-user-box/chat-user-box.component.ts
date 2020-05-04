import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

import { UserModel } from 'app/shared/models/user.model';

@Component({
  selector: 'div[avatar-chat-user-box]',
  templateUrl: './chat-user-box.component.html',
  styleUrls: ['chat-user-box.component.scss'],
})
export class AvatarChatUserBoxComponent implements OnInit {
  @Input() user: UserModel;

  constructor(private router: Router) {}

  @HostBinding('class.box')
  @HostBinding('class.is-size-7')
  @HostBinding('class.is-multiline')
  ngOnInit() {}
}
