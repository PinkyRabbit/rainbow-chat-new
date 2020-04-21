import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'div[edit-user]',
  templateUrl: './edit-user.component.html',
  styleUrls: ['edit-user.component.scss'],
  animations: [
    trigger('openCloseAvatarUploadModal', [
      state(
        'openAvatarModal',
        style({
          opacity: 1,
        })
      ),
      state(
        'closeAvatarModal',
        style({
          opacity: 0.1,
        })
      ),
      transition('openAvatarModal => closeAvatarModal', [animate('1s')]),
      transition('closeAvatarModal => openAvatarModal', [animate('0.5s')]),
    ]),
  ],
})
export class EditUserComponent implements OnInit {
  marginTop = 0;
  minHeight = 0;
  selectedAvatar = null;

  constructor() {}

  ngOnInit() {
    this.onInitAndOnResize(null);
  }

  onInitAndOnResize(e) {
    this.marginTop = 0;
    this.minHeight = 0;
    setTimeout(() => {
      const navbarHeight = document.getElementById('navbar').offsetHeight;
      const footerHeight = document.getElementsByTagName('footer')[0]
        .offsetHeight;
      const windowHeight = this.getWindowHeigh();
      this.marginTop = navbarHeight;
      this.minHeight = windowHeight - navbarHeight - footerHeight;
    }, 300);
  }

  getStyles() {
    return {
      'margin-top': `${this.marginTop}px`,
      'margin-bottom': '0px',
    };
  }

  private getWindowHeigh() {
    const doc = document;
    const docElem = doc.documentElement;
    const body = doc.getElementsByTagName('body')[0];
    return window.innerHeight || docElem.clientHeight || body.clientHeight;
  }

  showUploadAvatarModal() {
    return !!this.selectedAvatar;
  }

  setImageForAvatarModal(file) {
    this.selectedAvatar = file;
  }
}
