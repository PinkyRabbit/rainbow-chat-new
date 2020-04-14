import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'span[text-chunk-in-message]',
  template: `{{ text }}`,
})
export class TextNodeComponent implements OnInit {
  @Input() text: string;
  constructor() {}
  ngOnInit() {}
}
