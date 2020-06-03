import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { SubSink } from 'subsink';
import { Store, select } from '@ngrx/store';

import { selectUserId } from 'app/shared/modules/user/store/user.selectors';

@Component({
  selector: 'main[app-home-main]',
  templateUrl: './home-main.component.html',
})
export class HomeMainComponent implements OnInit, DoCheck, OnDestroy {
  private subs = new SubSink();
  userId = null;

  constructor(private store: Store) {}
  ngOnInit() {}

  ngDoCheck() {
    this.getUserId();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  getUserId() {
    this.subs.sink = this.store.pipe(select(selectUserId)).subscribe(
      (userId) => {
        if (this.userId !== userId) {
          this.userId = userId;
        }
      },
      (err) => console.log(err)
    );
  }
}
