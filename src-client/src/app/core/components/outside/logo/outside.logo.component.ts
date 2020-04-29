import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'div[app-outside-logo]',
  template: `
    <figure class="image" id="main-logo">
      <a routerLink="/" alt="На главную">
        <img src="/assets/logo.png" alt="logo" />
      </a>
    </figure>
  `,
})
export class OutsideLogoComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
}
