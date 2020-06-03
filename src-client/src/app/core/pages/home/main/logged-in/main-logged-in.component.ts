import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'div[app-main-logged-in]',
  templateUrl: './main-logged-in.component.html',
  styleUrls: ['main-logged-in.component.scss'],
})
export class MainLoggedInComponent implements OnInit {
  readonly pageTitle = 'В разработке';

  constructor(private router: Router) {}

  ngOnInit() {}
}
