import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie';
import { Item } from '../store/api.reducer';

@Injectable({
  providedIn: 'root'
})
export class DexieService extends Dexie {
  items!: Table<Item, number>;

  constructor() {
    super('CursoAngularDB');

    this.version(1).stores({
      items: '++id,nombre'
    });

    this.items = this.table('items');
  }

  guardarItem(item: Item): Promise<number> {
    return this.items.put(item);
  }

  obtenerItems(): Promise<Item[]> {
    return this.items.toArray();
  }
}