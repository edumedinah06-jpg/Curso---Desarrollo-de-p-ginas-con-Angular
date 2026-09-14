import { Directive, ElementRef, inject, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { trackClick } from '../store/tracking.actions';

@Directive({
  selector: '[appClickTracking]',
  standalone: true
})
export class ClickTrackingDirective implements OnInit, OnDestroy {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly store = inject(Store);
  private readonly destroy$ = new Subject<void>();

  ngOnInit(): void {
    fromEvent<MouseEvent>(this.elementRef.nativeElement, 'click')
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        const tag = this.elementRef.nativeElement.dataset['trackingTag'];
        if (tag) {
          this.store.dispatch(trackClick({ tag }));
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}