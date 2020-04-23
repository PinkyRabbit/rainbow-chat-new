import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'div[app-error401-component]',
  templateUrl: './error401.component.html',
  styleUrls: ['error401.component.scss'],
})
export class Error401Component implements OnInit {
  mainMinHeight = 0;
  loaderHeight = 100;
  boxShadow = 'none';
  loaderDisabled = true;

  constructor() {}

  ngOnInit() {
    this.onInitAndOnResize(null);
  }

  onInitAndOnResize(e) {
    this.mainMinHeight = 0;
    setTimeout(() => {
      const footerHeight = document.getElementsByTagName('footer')[0]
        .offsetHeight;
      const starsHeight = document.getElementById('stars').offsetHeight;
      const windowHeight = this.getWindowHeigh();
      this.mainMinHeight = windowHeight - footerHeight - starsHeight;
      this.boxShadow = this.getBoxShadow();
    }, 300);
  }

  isLoaderEnabled(loaderInvertedState) {
    this.loaderDisabled = !loaderInvertedState;
    if (this.loaderDisabled) {
      this.loaderHeight = document.getElementById(
        'unauthorized-component'
      ).offsetHeight;
    }
  }

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
}
