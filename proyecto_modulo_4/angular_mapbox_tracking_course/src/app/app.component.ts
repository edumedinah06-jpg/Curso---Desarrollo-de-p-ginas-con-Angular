import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { ClickTrackingDirective } from './directives/click-tracking.directive';
import { AnimatedPanelComponent } from './animated-panel/animated-panel.component';
import { MapDemoComponent } from './map/map.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ClickTrackingDirective, AnimatedPanelComponent, MapDemoComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  trackingCounts$ = this.store.select(state => (state as any).tracking.counts);
  totalClicks$ = this.trackingCounts$.pipe(
    map(counts => Object.values(counts as Record<string, number>)
      .reduce((sum, value) => sum + value, 0))
  );

  constructor(private readonly store: Store) {}
}