import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '[app-outside-page-header]',
  templateUrl: './outside.page-header.component.html',
  styleUrls: ['outside.page-header.component.scss'],
})
export class OutsidePageHeaderComponent implements OnInit {
  @Input() title: string;

  constructor(private router: Router) {}

  @HostBinding('class.column')
  @HostBinding('class.is-full')
  @HostBinding('class.columns')
  ngOnInit() {}
}
