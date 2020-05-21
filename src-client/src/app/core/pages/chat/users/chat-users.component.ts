import {
  Component,
  OnInit,
  Input,
  HostBinding,
  Output,
  EventEmitter,
  OnDestroy,
  OnChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';
import { Store } from '@ngrx/store';

import { UserForBox } from 'app/shared/models/user-for-box.model';
import { pickUsersInTheRoom } from 'app/shared/modules/rooms/store/rooms.selectors';
import { deepCompareTwoArraysOfObjects } from 'app/shared/helpers';
import { NavbarUserControlSerivce } from 'app/core/components/navbar/navbar-user-control.service';
import { SettingsModel } from 'app/shared/services/settings/settings.model';

@Component({
  selector: '#chat-users',
  templateUrl: './chat-users.component.html',
  styleUrls: ['chat-users.component.scss'],
})
export class ChatUsersComponent implements OnInit, OnDestroy, OnChanges {
  private subs = new SubSink();
  @Input() settings: SettingsModel;
  @Output() addUsernameToMessage: EventEmitter<any> = new EventEmitter<any>();

  chatUsers: UserForBox[] = [];

  constructor(
    private router: Router,
    private store: Store,
    private navbarUserControlSerivce: NavbarUserControlSerivce
  ) {}

  public set isUsersHidden(value: boolean) {
    this._isUsersHidden = value;
    this._slideIn = !value && this.settings.isOnTablet;
    // if (this._slideIn) {
    //   setTimeout(() => {
    //     this._slideIn = false;
    //   }, 2000);
    // }
  }
  public get isUsersHidden(): boolean {
    return this._isUsersHidden;
  }

  @HostBinding('class.is-users-on-tablet')
  _isUserOnTablet: boolean;
  @HostBinding('class.is-one-fifth')
  _isOneFifth: boolean;
  @HostBinding('class.is-hidden')
  _isUsersHidden: boolean;
  @HostBinding('class.animate__slideInRight')
  @HostBinding('class.animate__animated')
  _slideIn: boolean;
  ngOnInit() {
    this.subscribeToUsersInStore();
    this.subscribeToUserButton();
    this.viewSettings();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  ngOnChanges(changes) {
    this.viewSettings();
  }

  hideUsersBar() {
    this.navbarUserControlSerivce.changeUserTabStatus(true);
  }

  private viewSettings() {
    this._isUserOnTablet = this.settings.isOnTablet;
    this._isOneFifth = !this.settings.isOnTablet;
    this.isUsersHidden = this.settings.isOnTablet;
  }

  private subscribeToUsersInStore() {
    const { url } = this.router;
    const chatSlugWithQuery = url.replace('/chat/', '').toLowerCase();
    const chatSlug = /^[0-9a-z-]+/.exec(chatSlugWithQuery)[0];
    this.subs.sink = this.store.select(pickUsersInTheRoom, chatSlug).subscribe(
      (users) => {
        if (deepCompareTwoArraysOfObjects(this.chatUsers, users)) {
          // this.chatUsers = users;
          const fakeUsers = [];
          const [user] = users;
          for (let i = 0; i < 49; i++) {
            fakeUsers.push(user);
          }
          this.chatUsers = fakeUsers;
        }
      },
      (error) => {
        this.chatUsers = [];
        console.log(error);
      }
    );
  }

  private subscribeToUserButton() {
    this.subs.sink = this.navbarUserControlSerivce.userTabDisabled$.subscribe(
      (isUserTabDisabled) => {
        if (this.isUsersHidden !== isUserTabDisabled) {
          this.isUsersHidden = isUserTabDisabled;
        }
      }
    );
  }
}
