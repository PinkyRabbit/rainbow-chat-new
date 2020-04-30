import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'div[app-terms-of-use]',
  templateUrl: './terms-of-use.component.html',
  // styleUrls: ['home.component.scss'],
})
export class TermsOfUseComponent implements OnInit {
  pageTitle = 'Правила';

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(`${this.pageTitle} ✔ Rainbow chat`);
  }
}
