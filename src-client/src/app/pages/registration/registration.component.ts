import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  readonly pageTitle: string = 'Регистрация';
  boxShadow = 'none';

  constructor() {}

  private getBoxShadow() {
    const windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    const shadowWidth = windowWidth / 3;
    return 'inset 0 0 ' + shadowWidth + 'px rgba(0, 0, 0, 0.5)';
  }

  ngOnInit() {
    this.boxShadow = this.getBoxShadow();
  }

  onResize(event) {
    this.boxShadow = this.getBoxShadow();
  }

  onSubmit() {}
}
