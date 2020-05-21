import {
  Component,
  OnInit,
  OnDestroy,
  HostBinding,
  HostListener,
} from '@angular/core';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from '@angular/router';
import { Location } from '@angular/common';
import { SubSink } from 'subsink';
import { Store, select } from '@ngrx/store';

import { selectUserId } from './shared/modules/user/store/user.selectors';
import { TokenService } from './shared/modules/auth/services/token.service';
import { getMe } from './shared/modules/user/store/user.actions';
import { SettingsService } from './shared/services/settings/settings.service';
import { SettingsModel } from './shared/services/settings/settings.model';

@Component({
  selector: '#root',
  template: `
    <!-- <div
      loader
      *ngIf="loaderIsActive"
      [pageIsLoading]="pageIsLoading"
      [title]="'Загрузка...'"
      [tooltip]="
        'Будьте вежливыми и терпиливыми с вашими собеседниками, и узнаете много интересного и нового. Помните, каждый человек - как книга.'
      "
      [timeout]="7000"
      [loaderHeight]="appSettings.windowHeight"
      [style.width.px]="appSettings.windowWidth"
      (disableLoader)="disableLoader()"
    >
      Loader...
    </div> -->
    <nav
      id="navbar"
      *ngIf="isNavbarVisible"
      [settings]="appSettings"
      [style.width.px]="appSettings.windowWidth"
    >
      Navbar loading...
    </nav>
    <div [style.marginTop.px]="appSettings.navbarHeight">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  route: string;
  userId: string;
  // appSettings: SettingsModel;
  appSettings: SettingsModel = {
    windowWidth: 1400,
    windowHeight: 900,
    navbarHeight: 0,
    isOnTablet: false,
  };
  pageIsLoading = false;
  loaderIsActive = false;

  public get isNavbarVisible() {
    return !!this.userId;
  }

  constructor(
    private location: Location,
    private router: Router,
    private store: Store,
    private tokenService: TokenService,
    private settingsService: SettingsService
  ) {}

  @HostBinding('class.hidden') isHidden: boolean;
  ngOnInit() {
    console.log('ngOnInit AppComponent');
    this.fixLocation();
    this.addLoaderWhenRouting();
    this.addNavbar();
    this.loginUserOnInit();
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event) {
    const navbar = document.getElementById('navbar');
    const navbarHeight = navbar
      ? navbar.clientHeight || navbar.offsetHeight
      : this.appSettings.navbarHeight;
    this.updateSettings(navbarHeight);
  }

  // @HostListener('window:load', ['$event'])
  // public onLoad(event) {
  //   console.log('window:load');
  //   setTimeout(() => {
  //     const { target } = event;
  //     const { navbarHeight } = this.appSettings;
  //     const windowHeight =
  //       target.innerHeight ||
  //       target.documentElement.clientHeight ||
  //       target.body.clientHeight;
  //     const windowWidth =
  //       target.innerWidth ||
  //       target.documentElement.clientWidth ||
  //       target.body.clientWidth;
  //     const isOnTablet = windowWidth < 1010;
  //     this.appSettings = new SettingsModel({
  //       windowWidth,
  //       windowHeight,
  //       navbarHeight,
  //       isOnTablet,
  //     });

  //     this.settingsService.updateSettings(this.appSettings);
  //   }, 100);
  // }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  loginUserOnInit() {
    if (this.tokenService.isAllTokensExists()) {
      this.store.dispatch(getMe());
    }
  }

  private fixLocation() {
    this.subs.sink = this.router.events.subscribe((val) => {
      if (this.location.path() !== '') {
        this.route = this.location.path();
      } else {
        this.route = '';
      }
    });
  }

  private addLoaderWhenRouting() {
    this.subs.sink = this.router.events.subscribe(
      (event: Event) => {
        if (event instanceof NavigationStart) {
          this.updateSettings(this.appSettings.navbarHeight);
          this.pageIsLoading = true;
          this.loaderIsActive = true;
        }
        if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError
        ) {
          setTimeout(() => {
            this.pageIsLoading = false;
          }, 700);
        }
      },
      (err) => console.log(err)
    );
  }

  private updateSettings(navbarHeight) {
    setTimeout(() => {
      const windowHeight =
        document.documentElement.clientHeight ||
        window.innerHeight ||
        document.body.clientHeight;
      const windowWidth =
        document.documentElement.clientWidth ||
        window.innerWidth ||
        document.body.clientWidth;
      const isOnTablet = windowWidth < 1010;
      this.appSettings = new SettingsModel({
        windowWidth,
        windowHeight,
        navbarHeight,
        isOnTablet,
      });

      this.settingsService.updateSettings(this.appSettings);
    }, 100);
  }

  public disableLoader() {
    this.loaderIsActive = false;
  }

  private addNavbar() {
    this.subs.sink = this.store.pipe(select(selectUserId)).subscribe(
      (userId) => {
        if (this.userId !== userId) {
          this.userId = userId;
          this.appSettings.navbarHeight = 0;
          if (userId) {
            setTimeout(() => {
              const navbar = document.getElementById('navbar');
              this.appSettings.navbarHeight =
                navbar.clientHeight || navbar.offsetHeight;
            }, 100);
          }
        }
      },
      (err) => console.log(err)
    );
  }
}
