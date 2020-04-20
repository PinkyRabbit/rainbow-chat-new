import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'div[edit-user]',
  templateUrl: './edit-user.component.html',
  styleUrls: ['edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  marginTop = 0;
  minHeight = 0;

  constructor() {}

  ngOnInit() {
    this.onInitAndOnResize(null);
  }

  onInitAndOnResize(e) {
    this.marginTop = 0;
    this.minHeight = 0;
    setTimeout(() => {
      const navbarHeight = document.getElementById('navbar').offsetHeight;
      const footerHeight = document.getElementsByTagName('footer')[0]
        .offsetHeight;
      const windowHeight = this.getWindowHeigh();
      this.marginTop = navbarHeight;
      this.minHeight = windowHeight - navbarHeight - footerHeight;
    }, 300);
  }

  getStyles() {
    return {
      'margin-top': `${this.marginTop}px`,
      'margin-bottom': '0px',
    };
  }

  private getWindowHeigh() {
    const doc = document;
    const docElem = doc.documentElement;
    const body = doc.getElementsByTagName('body')[0];
    return window.innerHeight || docElem.clientHeight || body.clientHeight;
  }
}
