import { Component, OnInit } from '@angular/core';

@Component({
  selector: '#chat',
  templateUrl: './chat.component.html',
  styleUrls: ['chat.component.scss'],
})
export class ChatComponent implements OnInit {
  maxChatSize = 0;

  constructor() {}

  ngOnInit() {
    this.onInitAndOnResize(null);
  }

  ngOnResize() {
    this.onInitAndOnResize(null);
  }

  private getWindowHeigh() {
    return (
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight
    );
  }

  onInitAndOnResize(e) {
    this.maxChatSize = 0;
    setTimeout(() => {
      const navbarHeight = document.getElementById('navbar').offsetHeight;
      const windowHeight = this.getWindowHeigh();
      this.maxChatSize = windowHeight - navbarHeight;
    }, 500);
  }
}
