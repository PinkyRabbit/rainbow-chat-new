import {
  Component,
  OnInit,
  HostBinding,
  Input,
  OnDestroy,
  DoCheck,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { SubSink } from 'subsink';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

import { AuthService } from 'app/shared/modules/auth/services/auth.service';
import { selectUser } from 'app/shared/modules/user/store/user.selectors';
import { MeModel } from 'app/shared/models/me.model';

@Component({
  selector: '[navbar-user]',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['navbar-user.component.scss'],
  animations: [
    trigger('openCloseSettingsModal', [
      state(
        'openSettingsModal',
        style({
          opacity: 1,
        })
      ),
      state(
        'closeSettingsModal',
        style({
          opacity: 0.1,
        })
      ),
      transition('openSettingsModal => closeSettingsModal', [animate('1s')]),
      transition('closeSettingsModal => openSettingsModal', [animate('0.5s')]),
    ]),
  ],
})
export class NavbarSettingsComponent implements OnInit, DoCheck, OnDestroy {
  private subs = new SubSink();
  user: MeModel;
  showSettingsModal: boolean;

  @Input() isOnTablet: boolean;

  constructor(
    private router: Router,
    private store: Store,
    private readonly authService: AuthService
  ) {}

  @HostBinding('class.navbar-item')
  @HostBinding('class.has-dropdown')
  @HostBinding('class.is-hoverable')
  ngOnInit() {
    this.showSettingsModal = false;
  }

  ngDoCheck() {
    this.pickUser();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  pickUser() {
    this.subs.sink = this.store
      .select(selectUser)
      .subscribe((user: MeModel) => {
        if (JSON.stringify(this.user) !== JSON.stringify(user)) {
          this.user = user;
        }
      });
  }

  pickHlsColor(value) {
    const n = value.split(',');
    return `hsl(${n[0]}, ${n[1]}%, ${n[2]}%)`;
  }

  logout(event) {
    event.preventDefault();
    this.subs.sink = this.authService.logout().subscribe(
      (_) => this.router.navigate(['/']),
      (err) => console.log(err)
    );
  }

  openSettings() {
    this.showSettingsModal = true;
  }

  updateSettings(e) {
    this.showSettingsModal = false;
  }
}
