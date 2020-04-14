import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'span',
  template: `{{ text }}`,
})
export class TextNodeComponent implements OnInit {
  @Input() text: string;
  constructor() {}
  ngOnInit() {}
}
