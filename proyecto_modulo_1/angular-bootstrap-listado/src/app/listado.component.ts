import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from './producto';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  @HostBinding('class.d-block')
  mostrarComoBloque = true;

  @HostBinding('class.mt-4')
  margenSuperior = true;

  productos: Producto[] = [
    {
      nombre: 'Laptop',
      descripcion: 'Equipo portátil para trabajo y estudio.',
      precio: 18500
    },
    {
      nombre: 'Teclado mecánico',
      descripcion: 'Teclado con iluminación y switches mecánicos.',
      precio: 1250
    },
    {
      nombre: 'Mouse inalámbrico',
      descripcion: 'Mouse ergonómico con conexión inalámbrica.',
      precio: 650
    }
  ];

  agregarProducto(
    nombre: string,
    descripcion: string,
    precio: string,
    formulario: HTMLFormElement
  ): void {
    const precioNumerico = Number(precio);

    if (!nombre.trim() || !descripcion.trim() || !precioNumerico || precioNumerico < 0) {
      return;
    }

    const nuevoProducto: Producto = {
      nombre: nombre.trim(),
      descripcion: descripcion.trim(),
      precio: precioNumerico
    };

    this.productos.push(nuevoProducto);
    formulario.reset();
  }
}