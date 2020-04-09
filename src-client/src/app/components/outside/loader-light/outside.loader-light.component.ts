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

  constructor(private router: Router) {}

  @HostBinding('class.column')
  @HostBinding('class.is-full')
  ngOnInit() {}
}
