import { createReducer, on } from '@ngrx/store';
import { agregarItem, borrarItem, votoPositivo, votoNegativo } from './items.actions';

export interface Item {
  id: number;
  nombre: string;
  votosPositivos: number;
  votosNegativos: number;
}

export interface ItemsState {
  items: Item[];
}

export const initialState: ItemsState = {
  items: [
    { id: 1, nombre: 'Angular', votosPositivos: 4, votosNegativos: 1 },
    { id: 2, nombre: 'TypeScript', votosPositivos: 3, votosNegativos: 0 },
    { id: 3, nombre: 'Redux / NgRx', votosPositivos: 2, votosNegativos: 2 }
  ]
};

// Reducer con acciones para agregar y borrar elementos,
// además de acciones para votar a favor y en contra.
export const itemsReducer = createReducer(
  initialState,

  on(agregarItem, (state, { item }) => ({
    ...state,
    items: [...state.items, item]
  })),

  on(borrarItem, (state, { id }) => ({
    ...state,
    items: state.items.filter(item => item.id !== id)
  })),

  on(votoPositivo, (state, { id }) => ({
    ...state,
    items: state.items.map(item =>
      item.id === id
        ? { ...item, votosPositivos: item.votosPositivos + 1 }
        : item
    )
  })),

  on(votoNegativo, (state, { id }) => ({
    ...state,
    items: state.items.map(item =>
      item.id === id
        ? { ...item, votosNegativos: item.votosNegativos + 1 }
        : item
    )
  }))
);