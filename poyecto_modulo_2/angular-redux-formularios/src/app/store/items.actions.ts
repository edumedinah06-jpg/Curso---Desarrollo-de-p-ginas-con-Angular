import { createAction, props } from '@ngrx/store';
import { Item } from './items.reducer';

export const agregarItem = createAction(
  '[Items] Agregar elemento',
  props<{ item: Item }>()
);

export const borrarItem = createAction(
  '[Items] Borrar elemento',
  props<{ id: number }>()
);

export const votoPositivo = createAction(
  '[Items] Voto positivo',
  props<{ id: number }>()
);

export const votoNegativo = createAction(
  '[Items] Voto negativo',
  props<{ id: number }>()
);