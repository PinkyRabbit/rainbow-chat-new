import {
  Component,
  OnInit,
  Input,
  HostBinding,
  Output,
  EventEmitter,
} from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

import { User } from 'app/models/user';

@Component({
  selector: 'div[modal-avatar]',
  templateUrl: './modal-avatar.component.html',
  styleUrls: ['modal-avatar.component.scss'],
})
export class ModalAvatarComponent implements OnInit {
  @Input() file: File;
  @Output() disableFile: EventEmitter<any> = new EventEmitter<any>();

  croppedImage: any = '';
  private chuckNorris: User = {
    _id: '1',
    username: 'Chuck Norris',
    nameColor: '34,78,75',
    nameFont: 'font-1',
    textColor: '160,100,75',
    textFont: 'font-2',
    avatarSmall: '',
  };

  @HostBinding('class.is-active')
  @HostBinding('class.modal')
  ngOnInit() {}

  stopAvatarEdit() {
    this.disableFile.emit(null);
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  getUserboxUser(): User {
    return {
      ...this.chuckNorris,
      avatarSmall: this.croppedImage,
    };
  }

  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }
}
