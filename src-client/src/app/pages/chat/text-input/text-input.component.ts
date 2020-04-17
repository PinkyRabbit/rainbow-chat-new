import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: '#text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['text-input.component.scss'],
})
export class TextInputComponent implements OnInit {
  constructor() {}

  @HostBinding('class.field')
  @HostBinding('class.has-addons')
  ngOnInit() {}
}
