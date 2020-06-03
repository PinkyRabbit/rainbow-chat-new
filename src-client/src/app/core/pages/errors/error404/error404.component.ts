import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'div[app-error404-component]',
  templateUrl: './error404.component.html',
})
export class Error404Component implements OnInit {
  pageTitle = 'Страницы не существует';

  constructor(private titleService: Title, private router: Router) {}

  ngOnInit() {
    this.titleService.setTitle(`${this.pageTitle} ✔ Rainbow chat`);
  }
}
