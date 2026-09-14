import { Component } from '@angular/core';
import { ListadoComponent } from './listado.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Catálogo de productos';
  descripcion = 'Ejemplo de Angular utilizando Bootstrap y una lista reactiva.';
}