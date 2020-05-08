import { Component, OnInit, Input } from '@angular/core';
import { hsl } from 'color-convert';

import { ChatMessageModel } from 'app/shared/models/chat-message.model';
import { MeModel } from 'app/shared/models/me.model';
import { UserModel } from 'app/shared/models/user.model';

import {
  fontOptions,
  borderOptions,
  soundOptions,
  soundVolumeOptions,
} from './options';

@Component({
  selector: 'div[message-settings]',
  templateUrl: './message-settings.component.html',
  styleUrls: ['message-settings.component.scss'],
})
export class MessageSettingsComponent implements OnInit {
  @Input() user: MeModel;

  testMessage: ChatMessageModel;
  fontOptions: any;
  borderOptions: any;
  soundOptions: any;
  soundVolumeOptions: any;
  color = '#ffffff';
  nameColor: string;
  changeNameColorDialog = false;
  textColor: string;
  changeTextColorDialog = false;
  selectedSound: any;

  constructor() {}

  ngOnInit() {
    const from = new UserModel(this.user);
    this.testMessage = {
      _id: Date.now().toString(),
      date: '123',
      message: this.user.statusText || 'Текст вашего сообщения...',
      isBanned: false,
      from,
      to: [from],
    };

    this.fontOptions = Object.entries(fontOptions).map(([key, value]) => ({
      key,
      value,
    }));
    this.borderOptions = Object.entries(borderOptions).map(([key, value]) => ({
      key,
      value,
    }));
    this.soundOptions = [...soundOptions];
    this.soundVolumeOptions = [...soundVolumeOptions];

    this.nameColor = `#${this.getHexFromColor(this.user.nameColor)}`;
    this.textColor = `#${this.getHexFromColor(this.user.textColor)}`;
    this.selectedSound = this.soundOptions[0];
  }

  pickHlsColor(value) {
    const n = value.split(',');
    return `hsl(${n[0]}, ${n[1]}%, ${n[2]}%)`;
  }

  getHexFromColor(val) {
    const hslParams = this.pickHlsColor(val)
      .split(',')
      .map((v) => parseInt(v, 10));
    return hsl.hex(hslParams[0], hslParams[1], hslParams[2]);
  }
}
