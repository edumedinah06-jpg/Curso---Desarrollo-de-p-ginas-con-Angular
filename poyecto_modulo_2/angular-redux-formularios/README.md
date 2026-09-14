# Proyecto Angular - Formularios, Rutas, EventEmitter y Redux

Este proyecto está preparado para cumplir los 10 requisitos indicados.

## Requisitos incluidos

1. `FormularioHijoComponent` declara un `EventEmitter` decorado con `@Output`.
2. `src/app/app.module.ts` contiene rutas con `redirectTo` y rutas con `component`.
3. `app.component.html` contiene el `<router-outlet>` raíz.
4. `FormularioHijoComponent` configura un `FormGroup` en el constructor usando `FormBuilder`, con los controles `nombre` y `correo`.
5. Los controles del `FormGroup` están vinculados mediante `formControlName` a inputs de texto.
6. `FormularioPadreComponent` contiene `<app-formulario-hijo>` y recibe el evento con `(formularioEnviado)="recibirFormulario($event)"`.
7. El formulario tiene dos campos; `nombre` usa `required` y un validador personalizado y parametrizable `minLengthParametrizado(4)`.
8. El HTML usa `*ngIf` y `hasError()` para mostrar los mensajes de validación.
9. `items.reducer.ts` tiene acciones para `agregarItem` y `borrarItem`, manejadas por el reducer.
10. `VotosComponent` implementa votos positivos y negativos con NgRx; cada elemento tiene sus propios contadores.

## Ejecutar

Extrae el ZIP y abre una terminal dentro de la carpeta:

```bash
npm install
npm start
```

Después abre la dirección indicada por Angular CLI, normalmente:

```text
http://localhost:4200
```

## Rutas

- `/inicio`
- `/formularios`
- `/votos`

La ruta vacía (`''`) utiliza `redirectTo: 'inicio'`.

## Nota

El proyecto utiliza NgRx Store como implementación Redux para Angular y una estructura tradicional basada en `AppModule`, ya que el ejercicio solicita explícitamente un `module.ts` con configuración de rutas.
