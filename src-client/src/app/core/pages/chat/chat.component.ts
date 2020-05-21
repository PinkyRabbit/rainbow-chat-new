import {
  Component,
  OnInit,
  OnDestroy,
  HostListener,
  AfterViewInit,
} from '@angular/core';
import { SubSink } from 'subsink';

import { SettingsService } from 'app/shared/services/settings/settings.service';
import { SettingsModel } from 'app/shared/services/settings/settings.model';

@Component({
  selector: '#chat',
  templateUrl: './chat.component.html',
  styleUrls: ['chat.component.scss'],
})
export class ChatComponent implements OnInit, AfterViewInit, OnDestroy {
  private subs = new SubSink();
  private inputHeight = 0;
  public settings: SettingsModel = {
    windowWidth: 1400,
    windowHeight: 900,
    navbarHeight: 0,
    isOnTablet: false,
  };

  get maxChatSize() {
    return this.settings
      ? this.settings.windowHeight -
          this.settings.navbarHeight -
          this.inputHeight
      : 0;
  }

  constructor(private settingsService: SettingsService) {}

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.getInputHeight();
  }

  ngOnInit() {
    this.subscribeToSettings();
  }

  ngAfterViewInit() {
    this.getInputHeight();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  private getInputHeight() {
    this.inputHeight = 0;
    setTimeout(() => {
      this.inputHeight = document.getElementById('text-input').offsetHeight;
    }, 500);
  }

  private subscribeToSettings() {
    this.subs.sink = this.settingsService.getSettings$.subscribe((settings) => {
      if (
        !this.settings ||
        JSON.stringify(settings) !== JSON.stringify(this.settings)
      ) {
        this.settings = settings;
      }
    });
  }
}
