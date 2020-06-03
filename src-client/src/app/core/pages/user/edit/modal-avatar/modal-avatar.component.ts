import {
  Component,
  OnInit,
  Input,
  HostBinding,
  Output,
  EventEmitter,
} from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

import { UserModel } from 'app/shared/models/user.model';

@Component({
  selector: 'div[modal-avatar]',
  templateUrl: './modal-avatar.component.html',
  styleUrls: ['modal-avatar.component.scss'],
})
export class ModalAvatarComponent implements OnInit {
  @Input() file: File;
  @Output() disableFile: EventEmitter<any> = new EventEmitter<any>();

  croppedImage: any = '';
  private chuckNorris: UserModel = {
    _id: '1',
    username: 'Chuck Norris',
    nameColor: '34,78,75',
    nameFont: 'font-1',
    textColor: '160,100,75',
    textFont: 'font-2',
    avatar: '',
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

  getUserboxUser(): UserModel {
    return {
      ...this.chuckNorris,
      avatar: this.croppedImage,
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
