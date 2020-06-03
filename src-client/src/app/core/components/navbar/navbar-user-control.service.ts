import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { SettingsService } from 'app/shared/services/settings/settings.service';

@Injectable()
export class NavbarUserControlSerivce {
  // private isOnTablet = false;
  private isUserTabDisabled = new Subject<boolean>();
  userTabDisabled$ = this.isUserTabDisabled.asObservable();

  constructor(private settingsService: SettingsService) {
    // this.settingsService.getSettings$.subscribe((settings) => {
    //   console.log(
    //     `NavbarUserControlSerivce -> ${this.isOnTablet} !== ${settings.isOnTablet}`
    //   );
    //   if (this.isOnTablet !== settings.isOnTablet) {
    //     this.isOnTablet = settings.isOnTablet;
    //     setTimeout(() => {
    //       this.changeUserTabStatus(this.isOnTablet);
    //     }, 50);
    //   }
    // });
  }

  changeUserTabStatus(status: boolean) {
    console.log(`NavbarUserControlSerivce -> isUserTabDisabled = ${status}`);
    this.isUserTabDisabled.next(status);
  }
}
