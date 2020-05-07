import {
  Component,
  OnInit,
  HostBinding,
  Input,
  OnDestroy,
  DoCheck,
} from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'app/shared/modules/auth/services/auth.service';
import { SubSink } from 'subsink';
import { Store } from '@ngrx/store';
import { selectUser } from 'app/shared/modules/user/store/user.selectors';
import { MeModel } from 'app/shared/models/me.model';

@Component({
  selector: '[navbar-settings]',
  templateUrl: './navbar-settings.component.html',
  styleUrls: ['navbar-settings.component.scss'],
})
export class NavbarSettingsComponent implements OnInit, DoCheck, OnDestroy {
  private subs = new SubSink();
  // user: MeModel;

  @Input() isOnTablet: boolean;

  constructor(
    private router: Router,
    private store: Store,
    private readonly authService: AuthService
  ) {}

  @HostBinding('class.navbar-item')
  @HostBinding('class.has-dropdown')
  @HostBinding('class.is-hoverable')
  ngOnInit() {}

  ngDoCheck() {
    // this.store.select(selectUser).subscribe((user: MeModel) => {
    //   this.user = user;
    // console.log(`this.user._id = ${!!this.user._id}`);
    // });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
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
}
