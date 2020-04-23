import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
  windowHeight = 0;
  boxShadow = 'none';
  loader = true;
  loaderHeight = 100;

  constructor() {}

  private getWindowHeigh() {
    return (
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight
    );
  }

  private getBoxShadow() {
    const windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    const shadowWidth = windowWidth / 3;
    return 'inset 0 0 ' + shadowWidth + 'px rgba(0, 0, 0, 0.5)';
  }

  ngOnInit() {
    this.windowHeight = this.getWindowHeigh();
    this.boxShadow = this.getBoxShadow();
  }

  onResize(event) {
    this.windowHeight = this.getWindowHeigh();
    this.boxShadow = this.getBoxShadow();
  }

  isLoaderEnabled(loaderInvertedState) {
    this.loader = !loaderInvertedState;
    if (this.loader) {
      this.loaderHeight = document.getElementById(
        'login-component'
      ).offsetHeight;
    }
  }
}
