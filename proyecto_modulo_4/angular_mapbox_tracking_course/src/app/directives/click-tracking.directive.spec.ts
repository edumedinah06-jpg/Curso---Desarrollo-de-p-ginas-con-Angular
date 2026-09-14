import { ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ClickTrackingDirective } from './click-tracking.directive';
import { trackClick } from '../store/tracking.actions';

describe('ClickTrackingDirective', () => {
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()]
    });
    store = TestBed.inject(MockStore);
  });

  it('debe leer el tracking tag y despachar la acción al hacer click', () => {
    const element = document.createElement('button');
    element.dataset['trackingTag'] = 'test-button';
    const directive = new ClickTrackingDirective(
      new ElementRef(element),
      store
    );

    const spy = spyOn(store, 'dispatch').and.callThrough();
    directive.ngOnInit();
    element.click();

    expect(spy).toHaveBeenCalledWith(trackClick({ tag: 'test-button' }));
    directive.ngOnDestroy();
  });
});