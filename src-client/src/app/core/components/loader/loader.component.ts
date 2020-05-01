import { Subscription } from 'rxjs';
import {
  Component,
  OnInit,
  HostListener,
  AfterViewInit,
  OnChanges,
  OnDestroy,
} from '@angular/core';

import { LoaderService } from './loader.service';

@Component({
  selector: 'div[#loader]',
  templateUrl: './loader.component.html',
  styleUrls: ['loader.component.scss'],
})
export class LoaderComponent
  implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  title: string;
  isActive: boolean;
  tooltip: string;
  sliderStyles = {};

  private subscription: Subscription;

  constructor(private loaderService: LoaderService) {
    this.tooltip =
      'Будьте вежливыми и терпиливыми с вашими собеседниками, и узнаете много интересного и нового. Помните, каждый человек - как книга.';
  }

  ngOnInit() {
    this.isActive = false;
  }

  ngAfterViewInit() {
    this.calculateLoaderStyles();
  }

  ngOnChanges(changes) {
    console.log(changes);
    // isHidden() {
    //   if (this.isActive) {
    //     return false;
    //   }

    //   setTimeout(() => {
    //     return true;
    //   }, 300);
    // }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  @HostListener('window:resize')
  private calculateLoaderStyles() {
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
