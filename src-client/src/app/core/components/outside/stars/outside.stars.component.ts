import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'div[#stars]',
  template: `
    <figure class="image">
      <img src="/assets/star-1200.png" alt="stars" />
    </figure>
  `,
  styleUrls: ['outside.stars.component.scss'],
})
export class OutsideStartsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
