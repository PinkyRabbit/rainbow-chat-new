import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class UsernameToMessageService {
  private newUsername = new Subject<string>();

  constructor() {}

  getUsernameFromClick$ = this.newUsername.asObservable();
  selectUsername(username: string) {
    this.newUsername.next(username);
  }
}
