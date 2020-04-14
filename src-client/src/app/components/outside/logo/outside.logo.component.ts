import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outside-logo',
  templateUrl: './outside.logo.component.html',
})
export class OutsideLogoComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
}
