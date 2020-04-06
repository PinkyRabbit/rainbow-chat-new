import { Component, OnInit, HostBinding } from '@angular/core';
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
  private readonly createUserUrl = `${environment.apiUrl}/sign-up`;
  user = new NewUser();
  sexValues = ['Мальчик', 'Девочка'];

  constructor(private router: Router, private http: HttpClient) {}

  @HostBinding('class.columns')
  ngOnInit() {}

  onSubmit() {
    this.http.post(this.createUserUrl, this.user).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}