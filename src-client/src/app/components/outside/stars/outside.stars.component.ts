import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '[app-outside-stars]',
  templateUrl: './outside.stars.component.html',
  styleUrls: ['outside.stars.component.scss'],
})
export class OutsideStartsComponent implements OnInit {
  constructor(private router: Router) {}

  @HostBinding('class.column')
  ngOnInit() {}
}
