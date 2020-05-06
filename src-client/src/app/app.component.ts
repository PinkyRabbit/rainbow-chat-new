import { Component, DoCheck, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from './shared/models/app-state';
import * as UserActions from './shared/modules/user/store/user.actions';
import { selectUserId } from './shared/modules/user/store/user.selectors';

@Component({
  selector: '#root',
  template: `
    <div id="loader">Loader...</div>
    <nav id="navbar" *ngIf="isNavbarVisible">Navbar loading...</nav>
    <div [style.padding-top.px]="paddingTop">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent implements OnInit, DoCheck {
  route: string;
  paddingTop: number;
  isNavbarVisible = false;

  constructor(
    private location: Location,
    private router: Router,
    private store: Store<AppState>
  ) {
    router.events.subscribe((val) => {
      if (location.path() !== '') {
        this.route = location.path();
      } else {
        this.route = '';
      }
    });
  }

  ngOnInit() {
    this.store.dispatch(UserActions.getMe());
  }

  ngDoCheck() {
    this.store.select(selectUserId).subscribe((userId: string) => {
      this.paddingTop = 0;
      this.isNavbarVisible = false;
      if (userId) {
        const navbar = document.getElementById('navbar');
        this.paddingTop = navbar.offsetHeight;
        this.isNavbarVisible = true;
      }
    });
  }
}
