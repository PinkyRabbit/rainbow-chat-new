import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'div[#loader]',
  templateUrl: './loader.component.html',
  styleUrls: ['loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  @Input() title: string;

  tooltip: string;
  sliderStyles = {};
  isActive = false;

  constructor() {
    this.tooltip =
      'Будьте вежливыми и терпиливыми с вашими собеседниками, и узнаете много интересного и нового. Помните, каждый человек - как книга.';
  }

  @HostBinding('style.display')
  isVisible: string;
  ngOnInit() {
    this.isVisible = 'none';
    setTimeout(() => {
      this.calculateLoaderStyles();
    }, 1000);
  }

  calculateLoaderStyles() {
    this.sliderStyles = {
      'height.px': this.getPageHeight(),
      'paddingTop.px': this.getWindowHeigh() / 4,
    };
  }

  private getPageHeight() {
    const body = document.body;
    const html = document.documentElement;

    return Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
  }

  private getWindowHeigh() {
    return (
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight
    );
  }
}
