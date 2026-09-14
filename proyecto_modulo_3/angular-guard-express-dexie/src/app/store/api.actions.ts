import { createAction, props } from '@ngrx/store';
import { Item } from './api.reducer';

export const cargarItems = createAction(
  '[API] Cargar elementos',
  props<{ items: Item[] }>()
);

export const agregarItemExitoso = createAction(
  '[API] Agregar elemento exitoso',
  props<{ item: Item }>()
);