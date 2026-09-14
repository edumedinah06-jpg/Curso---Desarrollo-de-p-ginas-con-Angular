import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { AppComponent } from './app/app.component';
import { trackingReducer } from './app/store/tracking.reducer';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideStore({ tracking: trackingReducer })
  ]
}).catch(err => console.error(err));