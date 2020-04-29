import {
  Directive,
  ElementRef,
  AfterViewInit,
  HostListener,
} from '@angular/core';

@Directive({
  selector: 'section[#section-bricks]',
})
export class BrickWallStylesDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.setStylesForBrickBlock();
  }

  @HostListener('window:resize')
  onResize() {
    this.setStylesForBrickBlock();
  }

  private setStylesForBrickBlock() {
    this.setDefaultStyles();

    setTimeout(() => {
      const navbar = document.getElementById('navbar');
      const starsBlock = document.getElementById('stars');

      this.el.nativeElement.style.boxShadow = this.getBoxShadow();

      let minHeight = this.getWindowHeigh();
      if (navbar) {
        minHeight = minHeight - navbar.offsetHeight;
      }
      this.el.nativeElement.style.minHeight = `${minHeight}px`;

      if (starsBlock) {
        this.el.nativeElement.style.paddingBottom = `${starsBlock.offsetHeight}px`;
      }
    }, 300);
  }

  private setDefaultStyles() {
    this.el.nativeElement.style.boxShadow = 'none';
    this.el.nativeElement.style.minHeight = '0px';
    this.el.nativeElement.style.paddingBottom = '0px';
  }

  private getWindowHeigh() {
    return (
      document.documentElement.clientHeight ||
      window.innerHeight ||
      document.body.clientHeight
    );
  }

  private getWindowWidth() {
    return (
      document.documentElement.clientWidth ||
      window.innerWidth ||
      document.body.clientWidth
    );
  }

  private getBoxShadow() {
    const windowWidth = this.getWindowWidth();
    const shadowWidth = windowWidth / 3;
    return 'inset 0 0 ' + shadowWidth + 'px rgba(0, 0, 0, 0.5)';
  }
}
