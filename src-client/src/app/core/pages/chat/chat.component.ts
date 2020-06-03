import {
  Component,
  OnInit,
  OnDestroy,
  HostListener,
  AfterViewInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SubSink } from 'subsink';

import { SettingsModel } from 'app/shared/services/settings/settings.model';
import { UserForBox } from 'app/shared/models/user-for-box.model';
import { SettingsService } from 'app/shared/services/settings/settings.service';
import {
  pickUsersInTheRoom,
  pickMessagesInTheRoom,
} from 'app/shared/modules/rooms/store/rooms.selectors';
import { deepCompareTwoArraysOfObjects } from 'app/shared/helpers';
import { ChatMessageModel } from 'app/shared/models/chat-message.model';

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
  public chatUsers: UserForBox[] = [];
  public messages: ChatMessageModel[] = [];
  public roomSlug: string;

  get maxChatSize() {
    return this.settings
      ? this.settings.windowHeight -
          this.settings.navbarHeight -
          this.inputHeight
      : 0;
  }

  constructor(
    private router: Router,
    private store: Store,
    private settingsService: SettingsService
  ) {}

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.getInputHeight();
  }

  ngOnInit() {
    this.subscribeToSettings();
    this.subscribeToUsersInStore();
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

  private subscribeToUsersInStore() {
    const { url } = this.router;
    const chatSlugWithQuery = url.replace('/chat/', '').toLowerCase();
    this.roomSlug = /^[0-9a-z-]+/.exec(chatSlugWithQuery)[0];
    this.subs.sink = this.store
      .select(pickUsersInTheRoom, this.roomSlug)
      .subscribe(
        (users) => {
          if (deepCompareTwoArraysOfObjects(this.chatUsers, users)) {
            // this.chatUsers = users;
            const fakeUsers = [];
            const [user] = users;
            for (let i = 0; i < 49; i++) {
              fakeUsers.push(user);
            }
            this.chatUsers = fakeUsers;
          }
        },
        (error) => {
          this.chatUsers = [];
          console.log(error);
        }
      );

    this.subs.sink = this.store
      .select(pickMessagesInTheRoom, this.roomSlug)
      .subscribe(
        (messages) => {
          this.messages = messages;
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
