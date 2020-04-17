import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '#navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isOnTablet = false;
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

  constructor(private router: Router) {}

  @HostBinding('attr.role')
  ariaRole = 'navigation';

  @HostBinding('attr.aria-label')
  ariaLabel = 'main navigation';

  @HostBinding('class.navbar')
  @HostBinding('class.is-fixed-top')
  ngOnInit() {
    this.isOnTablet = this.isOnTabletFunc();
  }

  onResize(e) {
    setTimeout(() => {
      this.isOnTablet = this.isOnTabletFunc();
    }, 500);
  }

  isOnTabletFunc() {
    const windowWidth =
      document.body.clientWidth ||
      document.documentElement.clientWidth ||
      window.innerWidth;

    return windowWidth < 1010;
  }

  onHover(e, type) {
    if (!this.isOnTablet) {
      this.onClickMenuButton(e, type);
    }
  }

  onClickMenuButton(e, type) {
    const typeState = this.buttons[type];
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

    this.isMenuActive = true;
    this.buttons[type] = true;
    return true;
  }
}
