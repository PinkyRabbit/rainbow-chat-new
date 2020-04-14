import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '#navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  @HostBinding('attr.role')
  ariaRole = 'navigation';

  @HostBinding('attr.aria-label')
  ariaLabel = 'main navigation';

  @HostBinding('class.navbar')
  @HostBinding('class.is-dark')
  ngOnInit() {}
}
