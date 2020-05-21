import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';

import { selectFirstRoom } from 'app/shared/modules/rooms/store/rooms.selectors';

@Component({
  template: '<hr/>',
})
export class ChatRouterComponent implements OnInit, OnDestroy {
  private subs = new SubSink();

  constructor(private readonly store: Store, private router: Router) {}

  ngOnInit() {
    this.subs.sink = this.store
      .pipe(select(selectFirstRoom))
      .subscribe((room) => {
        if (room) {
          this.router.navigate([`/chat/${room.slug}`]);
        } else {
          this.router.navigate(['/']);
        }
      });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
