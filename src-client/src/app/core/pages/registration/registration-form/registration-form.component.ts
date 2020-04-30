import {
  Component,
  OnInit,
  HostBinding,
  Output,
  EventEmitter,
} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// import { NewUser } from 'app/models/new-user';
// import { AuthService } from 'app/services/auth/auth.service';
// import { environment } from 'environments/environment';
import { UserRegistrationModel } from 'app/shared/models';

@Component({
  selector: '#registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
  readonly sexValues = ['Мальчик', 'Девочка'];
  user = new UserRegistrationModel();

  constructor(
    private router: Router,
    private http: HttpClient // private readonly authService: AuthService
  ) {
    this.onSuccessUserCreation = this.onSuccessUserCreation.bind(this);
    this.onError = this.onError.bind(this);
  }

  // private error = '';
  // private readonly createUserUrl = `${environment.apiUrl}/auth/sign-up`;
  // user = new NewUser();

  // paddingBottom = 0;

  // @Output() loaderOn: EventEmitter<any> = new EventEmitter<any>();
  // @Output() loaderOff: EventEmitter<any> = new EventEmitter<any>();
  @HostBinding('class.columns')
  ngOnInit() {
    // this.onInitAndOnResize();
  }

  // onResize(event) {
  //   this.onInitAndOnResize();
  // }

  onSubmit() {
    // const { rulesAccepted, ...newUser } = this.user;
    // if (!rulesAccepted) {
    //   alert('Вы должны принять правила пользования сервисом!');
    // }
    // this.loaderOn.emit('Сохраняем нового пользователя...');
    // setTimeout(() => {
    //   this.http
    //     .post(this.createUserUrl, newUser, { responseType: 'text' })
    //     .subscribe(this.onSuccessUserCreation, this.onError);
    // }, 3000);
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

  // private getWindowHeigh() {
  //   return (
  //     window.innerHeight ||
  //     document.documentElement.clientHeight ||
  //     document.body.clientHeight
  //   );
  // }

  // private onInitAndOnResize() {
  //   this.paddingBottom = 0;
  //   setTimeout(() => {
  //     const rootElementHeight = document.getElementById('root').offsetHeight;
  //     const windowHeight = this.getWindowHeigh();
  //     if (rootElementHeight < windowHeight) {
  //       this.paddingBottom = windowHeight - rootElementHeight;
  //     }
  //   }, 500);
  // }
}
