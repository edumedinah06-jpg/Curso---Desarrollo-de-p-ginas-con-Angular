import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-padre',
  templateUrl: './formulario-padre.component.html'
})
export class FormularioPadreComponent {
  // El padre recibe el evento que emite el hijo mediante @Output.
  mensajeRecibido = '';

  recibirFormulario(datos: { nombre: string; correo: string }): void {
    this.mensajeRecibido = `Datos recibidos: ${datos.nombre} - ${datos.correo}`;
  }
}