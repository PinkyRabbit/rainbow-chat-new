import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '[navbar-settings-change-font]',
  template: '<h2>Настройка сообщений</h2>',
})
export class NavbarSettingsChangeFontComponent implements OnInit {
  constructor(private router: Router) {}

  @HostBinding('class.navbar-item')
  ngOnInit() {}
}
