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

  constructor(private router: Router, private http: HttpClient) {}

  // @Input() isLoaderDisabled: boolean;
  @Output() loaderOn: EventEmitter<any> = new EventEmitter();
  @Output() loaderOff: EventEmitter<any> = new EventEmitter();

  @HostBinding('class.columns')
  ngOnInit() {}

  onSubmit() {
    const { rulesAccepted, ...newUser } = this.user;
    if (!rulesAccepted) {
      alert('Вы должны принять правила пользования сервисом!');
    }

    this.loaderOn.emit('Сохраняем нового пользователя...');

    setTimeout(() => {
      this.http
        .post(this.createUserUrl, newUser, { responseType: 'text' })
        .subscribe(
          this.onSuccessUserCreation,
          (err) => console.log(err),
          () => this.loaderOff.emit()
        );
    }, 3000);
  }

  onSuccessUserCreation(res) {
    console.log(this);
    if (res === 'user.created') {
      // this.loaderOn.emit('Перенаправляем вас в чат...');
    }
    console.log(res);
  }

  // onSuccessUserCreation() {
  // console.log('onSuccessUserCreation');
  // this.loaderOn.emit('Перенаправляем вас в чат...');
  // setTimeout(() => {
  //   this.loaderOff.emit();
  // }, 3000);
  // }
}
