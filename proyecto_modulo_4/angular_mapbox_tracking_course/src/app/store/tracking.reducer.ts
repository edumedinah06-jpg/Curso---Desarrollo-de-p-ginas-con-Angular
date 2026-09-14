import { createReducer, on } from '@ngrx/store';
import { resetTracking, trackClick } from './tracking.actions';

export interface TrackingState {
  counts: Record<string, number>;
}

export const initialTrackingState: TrackingState = {
  counts: {}
};

export const trackingReducer = createReducer(
  initialTrackingState,
  on(trackClick, (state, { tag }) => ({
    ...state,
    counts: {
      ...state.counts,
      [tag]: (state.counts[tag] ?? 0) + 1
    }
  })),
  on(resetTracking, () => ({
    counts: {}
  }))
);