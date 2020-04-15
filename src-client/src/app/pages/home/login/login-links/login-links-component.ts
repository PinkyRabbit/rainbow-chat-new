import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '#app-login-links',
  template: `
    <a href="#">Правила</a>
    <a href="#">Подсмотреть</a>
    <a routerLink="/sign-in" class="reg-link">Регистрация</a>
  `,
  styleUrls: ['login-links.component.scss'],
})
export class LoginLinksComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {}
}
