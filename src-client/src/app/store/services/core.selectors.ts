/*
import { AuthSelectors } from './auth/auth.selectors';
import { Injectable } from '@angular/core';
import { combineLatest, merge } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class CoreSelectors {
    constructor(private authSelectors: AuthSelectors) {
    }

    // selectors$
    loading$ = combineLatest(this.authSelectors.loading$, this.ordersSelectors.loading$, this.orderSelectors.loading$,
        (auth, orders, order) => {
            return auth || orders || order;
        });
}
*/
