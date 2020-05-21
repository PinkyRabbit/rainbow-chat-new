import {
  Component,
  OnInit,
  HostBinding,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'div[loader]',
  templateUrl: './loader.component.html',
  styleUrls: ['loader.component.scss'],
})
export class LoaderComponent implements OnInit, OnChanges {
  @Input() pageIsLoading: boolean;
  @Input() title: string;
  @Input() tooltip: string;
  @Input() timeout: number;
  @Input() loaderHeight: number;
  @Output() disableLoader: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  public set isActive(value: boolean) {
    this._on = value;
    this._off = !value;
  }

  @HostBinding('class.animate__flipInY')
  // @HostBinding('class.animate__fadeIn')
  _on: boolean;
  @HostBinding('class.animate__fadeOut')
  _off: boolean;
  @HostBinding('class.animate__animated')
  ngOnInit() {
    this.isActive = true;
  }

  ngOnChanges(changes: any) {
    const timeoutIn = this.timeout - 1000;
    if (changes.pageIsLoading) {
      setTimeout(() => {
        this.isActive = false;
        setTimeout(() => {
          this.disableLoader.emit();
        }, 1000);
      }, timeoutIn);
    }
  }
}
