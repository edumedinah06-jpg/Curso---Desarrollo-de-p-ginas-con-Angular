import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Item, ItemsState } from './store/items.reducer';
import { agregarItem, borrarItem, votoPositivo, votoNegativo } from './store/items.actions';

@Component({
  selector: 'app-votos',
  templateUrl: './votos.component.html'
})
export class VotosComponent {
  items$: Observable<Item[]>;

  constructor(private store: Store<{ items: ItemsState }>) {
    this.items$ = this.store.select(state => state.items.items);
  }

  votarPositivo(id: number): void {
    this.store.dispatch(votoPositivo({ id }));
  }

  votarNegativo(id: number): void {
    this.store.dispatch(votoNegativo({ id }));
  }

  borrar(id: number): void {
    this.store.dispatch(borrarItem({ id }));
  }

  agregarEjemplo(): void {
    const nuevo: Item = {
      id: Date.now(),
      nombre: 'Nuevo elemento',
      votosPositivos: 0,
      votosNegativos: 0
    };

    this.store.dispatch(agregarItem({ item: nuevo }));
  }
}