import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'div[app-error404-component]',
  templateUrl: './error404.component.html',
  styleUrls: ['error404.component.scss'],
})
export class Error404Component implements OnInit {
  sectionMarginTop = null;
  mainMinHeight = 0;
  boxShadow = 'none';

  constructor(private router: Router) {}

  ngOnInit() {
    this.onInitAndOnResize(null);
  }

  onInitAndOnResize(e) {
    this.sectionMarginTop = null;
    this.mainMinHeight = 0;
    setTimeout(() => {
      const footerHeight = document.getElementsByTagName('footer')[0]
        .offsetHeight;
      const starsHeight = document.getElementById('stars').offsetHeight;
      const navbar = document.getElementById('navbar');
      const windowHeight = this.getWindowHeigh();
      if (navbar) {
        const navbarHeight = navbar.offsetHeight;
        this.sectionMarginTop = navbar.offsetHeight;
        this.mainMinHeight =
          windowHeight - footerHeight - starsHeight - navbarHeight;
      } else {
        this.mainMinHeight = windowHeight - footerHeight - starsHeight;
      }

      this.boxShadow = this.getBoxShadow();
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
