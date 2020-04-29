import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Router } from '@angular/router';

// import { AuthService } from 'app/services/auth/auth.service';

@Component({
  selector: '[navbar-settings]',
  templateUrl: './navbar-settings.component.html',
  styleUrls: ['navbar-settings.component.scss'],
})
export class NavbarSettingsComponent implements OnInit {
  @Input() isOnTablet: boolean;

  user = {
    _id: '123',
    username: 'Mikita Melnikau',
    nameColor: '339,81,85',
    nameFont: 'font-1',
    textColor: '122,37,84',
    textFont: 'font-2',
  };

  constructor(
    private router: Router
  ) // private readonly authService: AuthService
  {}

  @HostBinding('class.navbar-item')
  @HostBinding('class.has-dropdown')
  @HostBinding('class.is-hoverable')
  ngOnInit() {}

  pickHlsColor(value) {
    const n = value.split(',');
    return `hsl(${n[0]}, ${n[1]}%, ${n[2]}%)`;
  }

  logout(event) {
    // event.preventDefault();
    // this.authService.logout();
    // this.router.navigate(['/']);
  }
}
