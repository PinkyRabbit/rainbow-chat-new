import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { AuthLogin } from 'app/models';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['login-form.component.scss'],
})
export class LoginFromComponent implements OnInit {
  @Input() user: AuthLogin;
  @Output() submitForm: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    this.submitForm.emit(null);
  }
}
