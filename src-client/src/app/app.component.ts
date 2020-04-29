import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: '#root',
  template: `
    <div id="loader">Loader...</div>
    <nav id="navbar">Navbar loading...</nav>
    <div [style.padding-top.px]="paddingTop">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent implements AfterViewInit {
  route: string;
  paddingTop: number;

  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      if (location.path() !== '') {
        this.route = location.path();
      } else {
        this.route = '';
      }
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        this.paddingTop = navbar.offsetHeight;
      }
    }, 300);
  }
}
