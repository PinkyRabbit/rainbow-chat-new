import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: '#registration',
  templateUrl: './registration.component.html',
  styleUrls: ['registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  readonly pageTitle = 'Регистрация';
  loader = true;
  loaderText = 'Сохраняем нового пользователя...';
  loaderHeight = 100;
  boxShadow = 'none';

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(`${this.pageTitle} ✔ Rainbow chat`);
  }

  /*
  private getBoxShadow() {
    const windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    const shadowWidth = windowWidth / 3;
    return 'inset 0 0 ' + shadowWidth + 'px rgba(0, 0, 0, 0.5)';
  }

  ngOnInit() {
    this.onInitAndOnResize();
  }

  onResize(event) {
    this.onInitAndOnResize();
  }

  loaderOn(text) {
    this.loader = false;
    this.loaderText = text;
    this.loaderHeight = document.getElementById(
      'registration-form'
    ).offsetHeight;
  }

  loaderOff(a) {
    this.loader = true;
  }

  private onInitAndOnResize() {
    this.boxShadow = this.getBoxShadow();
    // setInterval(() => {
    //   this.paddingBottom += 20;
    //   console.log(
    //     `rootElement = ${document.getElementById('root').offsetHeight}`
    //   );
    // }, 1000);
    // this.paddingBottom = 0;
    // const rootElement = document.getElementById('root');
    // const windowHeight = this.getWindowHeigh();
    // while (
    //   rootElement.offsetHeight < windowHeight &&
    //   this.paddingBottom < 10000
    // ) {
    //   console.log(`rootElement = ${rootElement.offsetHeight}`);
    //   this.paddingBottom += 1;
    // }
  }
  */
}
