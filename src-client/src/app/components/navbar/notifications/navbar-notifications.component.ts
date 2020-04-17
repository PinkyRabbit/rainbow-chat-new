import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '[navbar-notifications]',
  templateUrl: './navbar-notifications.component.html',
  styleUrls: ['navbar-notifications.component.scss'],
})
export class NavbarNotificationsComponent implements OnInit {
  @Input() isOnTablet: boolean;
  @Input() src: boolean;
  @Input() isSvgActive: boolean;
  @Input() isSvgNotActive: boolean;

  constructor(private router: Router) {}

  @HostBinding('class.navbar-item')
  @HostBinding('class.has-dropdown')
  @HostBinding('class.is-hoverable')
  ngOnInit() {}
}
