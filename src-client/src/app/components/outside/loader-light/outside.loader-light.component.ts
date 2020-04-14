import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '[app-outside-loader-light]',
  templateUrl: './outside.loader-light.component.html',
  styleUrls: ['outside.loader-light.component.scss'],
})
export class OutsideLoaderLigthComponent implements OnInit {
  @Input() text: string;
  @Input() loaderHeight: number;

  tooltip: string;

  constructor(private router: Router) {
    this.tooltip =
      'Будьте вежливыми и терпиливыми с вашими собеседниками, и узнаете много интересного и нового. Помните, каждый человек - как книга.';
  }

  @HostBinding('class.column')
  @HostBinding('class.is-full')
  ngOnInit() {}
}
