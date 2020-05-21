import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { SettingsModel } from './settings.model';

@Injectable()
export class SettingsService {
  private settings = new Subject<SettingsModel>();
  getSettings$ = this.settings.asObservable();

  constructor() {}

  public updateSettings(update: SettingsModel) {
    this.settings.next(update);
  }
}
