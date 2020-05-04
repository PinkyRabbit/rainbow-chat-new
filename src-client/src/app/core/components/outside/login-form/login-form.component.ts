import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { login as actionLogin } from 'app/shared/modules/auth/store/auth.actions';

// import { AuthService } from 'app/services/auth/auth.service';

@Component({
  selector: 'div[app-login-form]',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  // @Output() isLoaderEnabled: EventEmitter<any> = new EventEmitter<any>();

  user = {
    username: '',
    password: '',
    rememberMe: false,
  };
  loginError = '';

  constructor(private router: Router, private store: Store) {}

  @HostBinding('class.has-text-centered')
  ngOnInit(): void {}

  onSubmit() {
    this.store.dispatch(actionLogin(this.user));
  }

  /*
  onSubmit() {
    const { username, password } = this.user;
    if (!username || !password) {
      return false;
    }

    this.authService.login(username, password).subscribe(
      (_) => {
        this.isLoaderEnabled.emit([true, 'Входим в чат...']);
        setTimeout(() => {
          this.isLoaderEnabled.emit([false, null]);
          this.router.navigate(['/chat/asdhfkajsdf']);
        }, 5000);
      },
      (error: HttpErrorResponse) => {
        this.loginError = '';
        this.user.password = '';
        if (error.status === 401) {
          this.loginError = 'Ошибка в логине или пароле';
          return false;
        }
        this.loginError = 'Ошибка сервера. Попробуйте зайти позже.';
      }
    );
  }
  */
}
