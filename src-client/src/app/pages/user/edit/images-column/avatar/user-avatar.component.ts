import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'div[user-avatar]',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['user-avatar.component.scss'],
})
export class UserAvatarComponent implements OnInit {
  @Output() avatarDropped: EventEmitter<any> = new EventEmitter<any>();

  image = {
    src: '/assets/user-default-avatar.jpg',
    alt: 'User Avatar',
  };
  imageSize = 512;
  isDropsoneActive = false;
  dropzoneStyles = {
    height: '100%',
    opacity: 0.8,
    background: '#2e3752',
    border: '2px dashed #ffeca1',
    color: '#ffeca1',
  };

  constructor() {}

  ngOnInit() {
    this.onInitAndOnResize(null);
  }

  onInitAndOnResize(e) {
    this.imageSize = document.getElementById('avatar-image').offsetHeight;
  }

  getIconSrc() {
    return this.isDropsoneActive
      ? '/assets/svg/cancel.svg'
      : '/assets/svg/photo.svg';
  }

  getSvgStyle() {
    return {
      'width.px': this.imageSize / 10,
      'height.px': this.imageSize / 10,
    };
  }

  activateDropzone() {
    this.isDropsoneActive = !this.isDropsoneActive;
  }

  getAvatarDropzoneStyles() {
    return {
      'width.px': this.imageSize,
      'height.px': this.imageSize,
    };
  }

  onImageDrop(event) {
    const { addedFiles } = event;
    if (addedFiles) {
      const [file] = addedFiles;
      this.avatarDropped.emit(file);
      this.isDropsoneActive = false;
    }
  }
}
