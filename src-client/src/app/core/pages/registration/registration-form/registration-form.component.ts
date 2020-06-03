import {
  Component,
  OnInit,
  HostBinding,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { SubSink } from 'subsink';

import { environment } from 'environments/environment';
import { UserRegistrationModel } from 'app/shared/models/user-registration.model';
import { map } from 'rxjs/operators';

// import { AuthService } from 'app/services/auth/auth.service';
// import { environment } from 'environments/environment';

@Component({
  selector: '#registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit, OnDestroy {
  registrationForm;
  isPasswordVisible = false;
  errorInPasswords = false;
  private subs = new SubSink();
  private apiUrl = environment.apiUrl;
  readonly sexValues = ['Мальчик', 'Девочка'];
  user = new UserRegistrationModel();
  registrationRequest;

  @HostBinding('class.columns')
  ngOnInit() {}

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  onSubmit(data) {
    this.errorInPasswords = false;
    if (data.password !== data.passwordConfirmation) {
      this.registrationForm.patchValue({
        password: '',
        passwordConfirmation: '',
      });
      this.errorInPasswords = true;
      return false;
    }
    console.log(data);
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

  validateUsernameIsNotTaken(control: AbstractControl) {
    const { value } = control;
    if (value.length < 2 || value.length > 30) {
      return null;
    }
    return this.http
      .get(`${this.apiUrl}/search/user/exists?s=${value}`)
      .pipe(map((response: any) => ({ usernameTaken: response })));
  }

  get username() {
    return this.registrationForm.get('username');
  }

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    // this.onSuccessUserCreation = this.onSuccessUserCreation.bind(this);
    // this.onError = this.onError.bind(this);

    this.registrationForm = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
        ],
        this.validateUsernameIsNotTaken.bind(this),
      ],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30),
        ],
      ],
      passwordConfirmation: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30),
        ],
      ],
      year: [
        null,
        [Validators.required, Validators.min(1940), Validators.max(2008)],
      ],
      gender: [
        null,
        [Validators.required, Validators.min(0), Validators.max(1)],
      ],
    });
  }
}
