import {
  Component,
  OnInit,
  HostBinding,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';

import { UserRegistrationModel } from 'app/shared/models/user-registration.model';

// import { AuthService } from 'app/services/auth/auth.service';
// import { environment } from 'environments/environment';

@Component({
  selector: '#registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  readonly sexValues = ['Мальчик', 'Девочка'];
  user = new UserRegistrationModel();
  registrationRequest;

  constructor(
    private router: Router // private httpAuthService: HttpAuthService
  ) {
    this.onSuccessUserCreation = this.onSuccessUserCreation.bind(this);
    this.onError = this.onError.bind(this);
  }

  @HostBinding('class.columns')
  ngOnInit() {}

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  onSubmit() {
    alert('onSubmit');
    // this.subs.sink = this.httpAuthService.$registration(this.user).subscribe(
    //   (result) => console.log(result),
    //   (error) => console.log(error)
    // );
  }

  private onSuccessUserCreation(res) {
    // this.loaderOff.emit(null);
    // if (res === 'user.created') {
    //   this.loaderOn.emit('Перенаправляем вас в чат...');
    //   setTimeout(() => {
    //     this.authService
    //       .login(this.user.username, this.user.password)
    //       .subscribe(
    //         (_) => {
    //           this.router.navigate(['/chat/asdhfkajsdf']);
    //         },
    //         (error: HttpErrorResponse) => {
    //           this.error = error.error.detail;
    //         }
    //       );
    //   }, 3000);
    // }
  }

  private onError(err) {
    // this.loaderOff.emit(null);
    // if (typeof err === 'string') {
    //   err = JSON.parse(err);
    // }
    // const { error } = err;
    // console.log(error);
    // console.log(typeof error);
    // alert(error.message || JSON.stringify(error));
  }
}
