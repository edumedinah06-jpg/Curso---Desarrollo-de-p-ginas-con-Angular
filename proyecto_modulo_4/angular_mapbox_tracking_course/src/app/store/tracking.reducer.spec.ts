import { trackingReducer, initialTrackingState } from './tracking.reducer';
import { resetTracking, trackClick } from './tracking.actions';

describe('trackingReducer', () => {
  it('debe retornar el estado inicial', () => {
    expect(trackingReducer(undefined, { type: '@@init' })).toEqual(initialTrackingState);
  });

  it('debe incrementar un tracking tag', () => {
    const state = trackingReducer(initialTrackingState, trackClick({ tag: 'button' }));
    expect(state.counts['button']).toBe(1);
    expect(initialTrackingState.counts['button']).toBeUndefined();
  });

  it('debe incrementar el mismo tag varias veces', () => {
    const first = trackingReducer(initialTrackingState, trackClick({ tag: 'button' }));
    const second = trackingReducer(first, trackClick({ tag: 'button' }));
    expect(second.counts['button']).toBe(2);
  });

  it('debe mantener separados los tags', () => {
    let state = trackingReducer(initialTrackingState, trackClick({ tag: 'header' }));
    state = trackingReducer(state, trackClick({ tag: 'footer' }));
    expect(state.counts).toEqual({ header: 1, footer: 1 });
  });

  it('debe resetear los contadores', () => {
    const state = trackingReducer(
      { counts: { button: 5 } },
      resetTracking()
    );
    expect(state).toEqual({ counts: {} });
  });

  it('debe ser una función pura y no mutar el estado recibido', () => {
    const original = { counts: { button: 2 } };
    const result = trackingReducer(original, trackClick({ tag: 'button' }));
    expect(original).toEqual({ counts: { button: 2 } });
    expect(result).not.toBe(original);
  });
});