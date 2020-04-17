import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '[navbar-chats]',
  templateUrl: './navbar-chats.component.html',
  styleUrls: ['navbar-chats.component.scss'],
})
export class NavbarChatsComponent implements OnInit {
  @Input() isOnTablet: boolean;
  @Input() src: boolean;
  @Input() isSvgActive: boolean;
  @Input() isSvgNotActive: boolean;

  constructor(private router: Router) {}

  @HostBinding('class.navbar-item')
  @HostBinding('class.has-dropdown')
  @HostBinding('class.is-hoverable')
  ngOnInit() {}

  setElementAsActive() {
    if (this.isOnTablet) {
      return false;
    }
  }
}
