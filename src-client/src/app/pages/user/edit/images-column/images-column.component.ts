import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'div[images-column]',
  templateUrl: './images-column.component.html',
  styleUrls: ['images-column.component.scss'],
})
export class ImagesColumnComponent implements OnInit {
  files: any[];

  constructor() {
    this.files = [];
  }

  ngOnInit() {}

  onSelect() {}

  onRemove() {}
}
