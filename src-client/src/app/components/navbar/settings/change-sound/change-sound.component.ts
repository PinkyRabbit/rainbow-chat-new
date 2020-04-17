import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '[navbar-settings-change-sound]',
  template: '<h2>Настройка звука</h2>',
})
export class NavbarSettingsChangeSoundComponent implements OnInit {
  constructor(private router: Router) {}

  @HostBinding('class.navbar-item')
  ngOnInit() {}
}
