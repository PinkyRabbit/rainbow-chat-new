import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'div[app-main-unauthorized]',
  templateUrl: './main-unauthorized.component.html',
  styleUrls: ['main-unauthorized.component.scss'],
})
export class MainUnauthorizedComponent implements OnInit, AfterViewInit {
  windowHeight = 0;
  boxShadow = 'none';
  loader = true;
  loaderHeight = 100;
  starsMarginTop = 0;

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

  ngOnInit() {}

  ngAfterViewInit() {
    this.onInitAndOnResize(null);
  }

  isLoaderEnabled(loaderInvertedState) {
    this.loader = !loaderInvertedState;
  }

  fixStarsHeight(mainHeight) {
    this.starsMarginTop = 0;
    const starsHeight = document.getElementById('stars').offsetHeight;
    if (this.windowHeight > mainHeight + starsHeight) {
      this.starsMarginTop = this.windowHeight - mainHeight - starsHeight - 25;
    }
  }

  onInitAndOnResize(e) {
    setTimeout(() => {
      this.windowHeight = this.getWindowHeigh();
      this.boxShadow = this.getBoxShadow();
      const mainHeight = document.getElementById('login-form-with-news')
        .offsetHeight;
      this.loaderHeight = mainHeight;
      this.fixStarsHeight(mainHeight);
    }, 300);
  }
}
