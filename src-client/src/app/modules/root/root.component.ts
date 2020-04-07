import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
})
export class RootComponent implements OnInit {
  route: string;

  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      if (location.path() !== '') {
        this.route = location.path();
      } else {
        this.route = '';
      }
    });
  }

  ngOnInit() {}
}
