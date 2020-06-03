import {
  Component,
  OnInit,
  HostBinding,
  OnDestroy,
  Input,
} from '@angular/core';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';

import { SettingsModel } from 'app/shared/services/settings/settings.model';

import { NavbarUserControlSerivce } from './navbar-user-control.service';

@Component({
  selector: 'nav[#navbar]',
  templateUrl: './navbar.component.html',
  styleUrls: ['navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Input() settings: SettingsModel;

  private subs = new SubSink();

  isMenuActive = false;
  hasUpdatesIn = {
    notifications: false,
    chats: false,
    users: false,
  };
  buttons = {
    settings: false,
    notifications: false,
    chats: false,
    users: false,
  };

  public get iconSize() {
    if (this.settings.windowWidth < 300) {
      return 15;
    }
    if (this.settings.windowWidth < 500) {
      return 20;
    }
    return 30;
  }

  constructor(
    private router: Router,
    private navbarUserControlSerivce: NavbarUserControlSerivce
  ) {}

  @HostBinding('attr.role')
  ariaRole = 'navigation';
  @HostBinding('attr.aria-label')
  ariaLabel = 'main navigation';
  @HostBinding('class.is-fixed-top')
  @HostBinding('class.navbar')
  ngOnInit() {
    this.subs.sink = this.navbarUserControlSerivce.userTabDisabled$.subscribe(
      (isUserTabDisabled) => {
        const isUserTabEnabled = !isUserTabDisabled;
        console.log(
          `NavbarComponent -> this.buttons.users !== isUserTabEnabled = ${
            this.buttons.users !== isUserTabEnabled
          }`
        );
        if (this.buttons.users !== isUserTabEnabled) {
          this.buttons.users = isUserTabEnabled;
        }
      }
    );
    // this.isOnTablet = this.isOnTabletFunc();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  public onHover(e, type) {
    if (!this.settings.isOnTablet) {
      this.onClickMenuButton(e, type);
    }
  }

  onClickMenuButton(e, type) {
    const typeState = this.buttons[type];
    if (type === 'users') {
      this.navbarUserControlSerivce.changeUserTabStatus(typeState);
    }
    if (typeState) {
      this.isMenuActive = false;
      this.buttons[type] = false;
      return false;
    }
    if (this.hasUpdatesIn[type]) {
      this.hasUpdatesIn[type] = false;
    }
    this.buttons = {
      settings: false,
      notifications: false,
      chats: false,
      users: false,
    };

    this.buttons[type] = true;
    if (type !== 'users') {
      this.isMenuActive = true;
    }

    return true;
  }
}
