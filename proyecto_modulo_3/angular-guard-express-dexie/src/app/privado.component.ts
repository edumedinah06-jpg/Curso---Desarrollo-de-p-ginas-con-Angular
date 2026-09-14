import { Component, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApiService } from './services/api.service';
import { Item } from './store/api.reducer';
import { Observable } from 'rxjs';
import { BaseNotifier } from './services/notifier.service';

@Component({
  selector: 'app-privado',
  templateUrl: './privado.component.html'
})
export class PrivadoComponent {
  items$: Observable<Item[]>;

  constructor(
    private apiService: ApiService,
    private store: Store<{ api: { items: Item[] } }>,
    @Inject(BaseNotifier) private notifier: BaseNotifier
  ) {
    this.items$ = this.store.select(state => state.api.items);
    this.notifier.notify('Área privada protegida por Guard.');
  }

  cargarDesdeApi(): void {
    this.apiService.cargarItems().subscribe({
      next: () => this.notifier.notify('Elementos cargados desde Express.'),
      error: err => this.notifier.notify(`Error al consultar API: ${err.message}`)
    });
  }

  agregar(): void {
    const nombre = `Elemento ${new Date().toLocaleTimeString()}`;

    this.apiService.agregarItem({ nombre }).subscribe({
      next: item => this.notifier.notify(`Agregado correctamente: ${item.nombre}`),
      error: err => this.notifier.notify(`Error al agregar: ${err.message}`)
    });
  }
}