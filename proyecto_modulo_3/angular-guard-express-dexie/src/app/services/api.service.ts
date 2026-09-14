import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Store } from '@ngrx/store';

import { API_CONFIG, ApiConfig } from '../tokens/api-config.token';
import { Item } from '../store/api.reducer';
import { agregarItemExitoso, cargarItems } from '../store/api.actions';
import { DexieService } from './dexie.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private store: Store<{ api: { items: Item[] } }>,
    private dexie: DexieService,
    @Inject(API_CONFIG) private config: ApiConfig
  ) {}

  cargarItems(): Observable<Item[]> {
    return this.http
      .get<Item[]>(`${this.config.baseUrl}/items`)
      .pipe(
        tap(items => {
          this.store.dispatch(cargarItems({ items }));

          // Sincroniza también los elementos recibidos con Dexie.
          for (const item of items) {
            void this.dexie.guardarItem(item);
          }
        })
      );
  }

  agregarItem(datos: { nombre: string }): Observable<Item> {
    return this.http
      .post<Item>(`${this.config.baseUrl}/items`, datos)
      .pipe(
        tap(item => {
          // 1) El API respondió afirmativamente.
          // 2) Se notifica a Redux mediante un Action.
          this.store.dispatch(agregarItemExitoso({ item }));

          // 3) También se guarda asíncronamente en Dexie.
          void this.dexie.guardarItem(item);
        })
      );
  }
}