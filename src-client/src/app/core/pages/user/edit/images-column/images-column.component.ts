import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'div[images-column]',
  templateUrl: './images-column.component.html',
  styleUrls: ['images-column.component.scss'],
})
export class ImagesColumnComponent implements OnInit {
  @Output() setImageForAvatarModal: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  avatarDropped(image) {
    this.setImageForAvatarModal.emit(image);
  }
}
