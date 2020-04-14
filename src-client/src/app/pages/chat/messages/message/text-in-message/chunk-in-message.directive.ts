import { Directive, ViewContainerRef, HostBinding } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[chunk]',
})
export class ChunkInMessageDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
