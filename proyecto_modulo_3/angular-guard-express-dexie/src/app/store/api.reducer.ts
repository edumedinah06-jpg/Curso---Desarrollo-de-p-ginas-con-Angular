import { createReducer, on } from '@ngrx/store';
import { agregarItemExitoso, cargarItems } from './api.actions';

export interface Item {
  id: number;
  nombre: string;
}

export interface ApiState {
  items: Item[];
}

const initialState: ApiState = {
  items: []
};

export const apiReducer = createReducer(
  initialState,

  on(cargarItems, (state, { items }) => ({
    ...state,
    items
  })),

  // El Action disparado por ApiService modifica el estado Redux.
  on(agregarItemExitoso, (state, { item }) => ({
    ...state,
    items: [...state.items, item]
  }))
);