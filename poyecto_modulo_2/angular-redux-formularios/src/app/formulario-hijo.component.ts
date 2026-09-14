import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-formulario-hijo',
  templateUrl: './formulario-hijo.component.html'
})
export class FormularioHijoComponent {
  @Output() formularioEnviado = new EventEmitter<{ nombre: string; correo: string }>();

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      nombre: ['', [
        Validators.required,
        this.minLengthParametrizado(4)
      ]],
      correo: ['', [
        Validators.required,
        Validators.email
      ]]
    });
  }

  // Validador personalizado y parametrizable.
  minLengthParametrizado(longitudMinima: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const valor = String(control.value ?? '');
      if (valor.length === 0) {
        return null;
      }

      return valor.length >= longitudMinima
        ? null
        : {
            longitudMinima: {
              requerida: longitudMinima,
              actual: valor.length
            }
          };
    };
  }

  hasError(campo: string, error: string): boolean {
    const control = this.formulario.get(campo);
    return !!control && control.touched && control.hasError(error);
  }

  enviar(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    this.formularioEnviado.emit({
      nombre: this.formulario.get('nombre')?.value,
      correo: this.formulario.get('correo')?.value
    });

    this.formulario.reset();
  }
}