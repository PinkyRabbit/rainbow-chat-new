import { Component, OnInit, Input } from '@angular/core';

import { MeModel } from 'app/shared/models/me.model';
import { UserModel } from 'app/shared/models/user.model';

@Component({
  selector: 'div[user-box-settings]',
  templateUrl: './user-box-settings.component.html',
  styleUrls: ['user-box-settings.component.scss'],
})
export class UserBoxSettingsComponent implements OnInit {
  @Input() user: MeModel;

  testUser: UserModel;

  constructor() {}

  ngOnInit() {
    this.testUser = new UserModel(this.user);
  }
}
