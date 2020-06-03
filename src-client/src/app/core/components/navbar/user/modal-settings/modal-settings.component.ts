import {
  Component,
  OnInit,
  HostBinding,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import { MeModel } from 'app/shared/models/me.model';

@Component({
  selector: 'div[modal-settings]',
  templateUrl: './modal-settings.component.html',
  styleUrls: ['modal-settings.component.scss'],
})
export class ModalSettingsComponent implements OnInit {
  @Input() user: MeModel;
  @Output() saveSettings: EventEmitter<any> = new EventEmitter<any>();

  activeTab = 1;

  constructor() {}

  @HostBinding('class.is-active')
  @HostBinding('class.modal')
  ngOnInit() {}

  stopEditSettings() {
    this.saveSettings.emit(this.activeTab);
  }

  changeActiveTabTo(value: number) {
    if (this.activeTab !== value) {
      // @TODO: add save previous tab
    }
    this.activeTab = value;
  }
}
