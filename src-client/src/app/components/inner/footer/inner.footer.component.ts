import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'footer[app-inner-footer]',
  templateUrl: './inner.footer.component.html',
  styleUrls: ['inner.footer.component.scss'],
})
export class InnerFooterComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
}
