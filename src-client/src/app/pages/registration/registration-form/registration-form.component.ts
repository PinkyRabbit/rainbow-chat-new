import {
  Component,
  OnInit,
  HostBinding,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { NewUser } from 'app/models/new-user';
import { environment } from 'environments/environment';

@Component({
  selector: '[app-registration-form]',
  templateUrl: './registration-form.component.html',
  styleUrls: ['registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
  private readonly createUserUrl = `${environment.apiUrl}/auth/sign-up`;
  user = new NewUser();
  sexValues = ['Мальчик', 'Девочка'];

  constructor(private router: Router, private http: HttpClient) {
    this.onSuccessUserCreation = this.onSuccessUserCreation.bind(this);
    this.onError = this.onError.bind(this);
  }

  @Output() loaderOn: EventEmitter<any> = new EventEmitter<any>();
  @Output() loaderOff: EventEmitter<any> = new EventEmitter<any>();

  @HostBinding('class.columns')
  ngOnInit() {}

  onSubmit() {
    const { rulesAccepted, ...newUser } = this.user;
    if (!rulesAccepted) {
      alert('Вы должны принять правила пользования сервисом!');
    }

    this.loaderOn.emit('Сохраняем нового пользователя...');

    const res = this.http.post(this.createUserUrl, newUser, {
      responseType: 'text',
    });

    setTimeout(() => {
      this.http
        .post(this.createUserUrl, newUser, { responseType: 'text' })
        .subscribe(this.onSuccessUserCreation, this.onError);
    }, 3000);
  }

  private onSuccessUserCreation(res) {
    this.loaderOff.emit(null);
    if (res === 'user.created') {
      this.loaderOn.emit('Перенаправляем вас в чат...');
    }
    console.log(res);
  }

  private onError(err) {
    this.loaderOff.emit(null);
    if (typeof err === 'string') {
      err = JSON.parse(err);
    }
    const { error } = err;
    console.log(error);
    console.log(typeof error);
    alert(error.message || JSON.stringify(error));
  }
}
