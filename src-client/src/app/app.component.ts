import {
  Component,
  OnInit,
  OnDestroy,
  DoCheck,
  HostBinding,
} from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SubSink } from 'subsink';
import { Store, select } from '@ngrx/store';

import { selectUserId } from './shared/modules/user/store/user.selectors';
import { TokenService } from './shared/modules/auth/services/token.service';
import { getMe } from './shared/modules/user/store/user.actions';

@Component({
  selector: '#root',
  template: `
    <div id="loader">Loader...</div>
    <nav id="navbar" *ngIf="isNavbarVisible">Navbar loading...</nav>
    <div [style.marginTop.px]="marginTop">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent implements OnInit, DoCheck, OnDestroy {
  private subs = new SubSink();
  route: string;
  marginTop = 0;
  isNavbarVisible = false;
  userId = null;

  constructor(
    private location: Location,
    private router: Router,
    private store: Store,
    private tokenService: TokenService
  ) {}

  @HostBinding('class.hidden') isHidden: boolean;
  ngOnInit() {
    console.log('ngOnInit AppComponent');
    this.fixLocation();
    this.loginUserOnInit();
  }

  ngDoCheck() {
    this.getUserId();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  loginUserOnInit() {
    if (this.tokenService.isAllTokensExists()) {
      this.store.dispatch(getMe());
    }
  }

  fixLocation() {
    this.subs.sink = this.router.events.subscribe((val) => {
      if (this.location.path() !== '') {
        this.route = this.location.path();
      } else {
        this.route = '';
      }
    });
  }

  getUserId() {
    this.subs.sink = this.store.pipe(select(selectUserId)).subscribe(
      (userId) => {
        if (this.userId !== userId) {
          this.userId = userId;
          this.marginTop = 0;
          this.isNavbarVisible = !!userId;

          if (this.isNavbarVisible) {
            setTimeout(() => {
              const navbarHeight = document.getElementById('navbar')
                .offsetHeight;
              this.marginTop = navbarHeight;
            }, 100);
          }
        }
      },
      (err) => console.log(err)
    );
  }
}
