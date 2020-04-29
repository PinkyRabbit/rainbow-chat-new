import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatInputComponent } from './chat-input/chat-input.component';

@Component({
  selector: '#chat',
  templateUrl: './chat.component.html',
  styleUrls: ['chat.component.scss'],
})
export class ChatComponent implements OnInit {
  @ViewChild(ChatInputComponent) input: ChatInputComponent;

  maxChatSize = 0;
  paddingTop = 0;

  constructor() {}

  ngOnInit() {
    this.onInitAndOnResize(null);
  }

  ngOnResize() {
    this.onInitAndOnResize(null);
  }

  private getWindowHeigh() {
    const doc = document;
    const docElem = doc.documentElement;
    const body = doc.getElementsByTagName('body')[0];
    return window.innerHeight || docElem.clientHeight || body.clientHeight;
  }

  onInitAndOnResize(e) {
    this.maxChatSize = 0;
    setTimeout(() => {
      const navbarHeight = document.getElementById('navbar').offsetHeight;
      const inputHeight = document.getElementById('text-input').offsetHeight;
      const windowHeight = this.getWindowHeigh();
      this.paddingTop = navbarHeight;
      this.maxChatSize = windowHeight - navbarHeight - inputHeight;
    }, 500);
  }

  // https://stackoverflow.com/questions/43009619/google-cloud-speech-api-word-hints
  // https://cloud.google.com/speech-to-text/docs/basics#phrase-hints
  getStyles() {
    return {
      'margin-top': `${this.paddingTop}px`,
      height: `${this.maxChatSize}px`,
    };
  }

  addUsernameToMessage(username) {
    this.input.addUsernameToInput(username);
  }
}
