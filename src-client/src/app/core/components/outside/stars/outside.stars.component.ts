import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'div[#stars]',
  template: `
    <div class="container">
      <div class="columns">
        <div class="column">
          <figure class="image">
            <img src="/assets/star-1200.png" alt="stars" />
          </figure>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['outside.stars.component.scss'],
})
export class OutsideStartsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
