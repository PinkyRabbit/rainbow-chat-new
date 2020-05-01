import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface LoaderState {
  isActive: boolean;
  title?: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loaderSubject = new Subject<LoaderState>();
  loaderState = this.loaderSubject.asObservable();

  constructor() {}

  show(title) {
    this.loaderSubject.next({ isActive: true, title } as LoaderState);
  }

  hide() {
    this.loaderSubject.next({ isActive: false } as LoaderState);
  }
}
