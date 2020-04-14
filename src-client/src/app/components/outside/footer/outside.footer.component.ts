import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outside-footer',
  templateUrl: './outside.footer.component.html',
  styleUrls: ['outside.footer.component.scss'],
})
export class OutsideFooterComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
}
