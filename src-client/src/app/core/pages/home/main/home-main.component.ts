import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'main[app-home-main]',
  templateUrl: './home-main.component.html',
  styleUrls: ['home-main.component.scss'],
})
export class HomeMainComponent implements AfterViewInit {
  mainSectionStyles = {};

  constructor() {}

  ngAfterViewInit() {
    this.onInitAndOnResize(null);
  }

  onInitAndOnResize(e) {
    const resultedStyles: any = {
      'box-shadow': 'none',
      'min-height.px': 0,
      'padding-bottom.px': 0,
    };

    setTimeout(() => {
      const navbar = document.getElementById('navbar');
      const starsBlock = document.getElementById('stars');

      resultedStyles.boxShadow = this.getBoxShadow();

      let minHeight = this.getWindowHeigh();
      if (navbar) {
        minHeight -= navbar.offsetHeight;
      }
      if (starsBlock) {
        resultedStyles['padding-bottom.px'] = starsBlock.offsetHeight;
      }
      resultedStyles['min-height.px'] = minHeight;

      this.mainSectionStyles = Object.assign({}, resultedStyles);
    }, 300);
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
