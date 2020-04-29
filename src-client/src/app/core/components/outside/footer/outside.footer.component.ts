import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'footer[app-outside-footer]',
  templateUrl: './outside.footer.component.html',
  styleUrls: ['outside.footer.component.scss'],
})
export class OutsideFooterComponent implements OnInit {
  constructor(private router: Router) {}

  @HostBinding('class.footer')
  ngOnInit() {}
}
