# Proyecto Angular + Bootstrap

Proyecto realizado para cumplir los requisitos del ejercicio:

1. Bootstrap está incluido como dependencia npm.
2. Bootstrap CSS se importa desde `src/styles.css`.
3. Se utilizan clases Bootstrap en `app.component.html` y `listado.component.html`.
4. Se usa interpolación `{{ }}` para mostrar variables de TypeScript.
5. `ListadoComponent` contiene un array de objetos `Producto`.
6. El listado utiliza `<ul>`, `<li>` y `*ngFor`.
7. `ListadoComponent` utiliza `@HostBinding`.
8. El formulario utiliza variables de plantilla con `#`.
9. Al enviar el formulario se llama a `agregarProducto()`.
10. `agregarProducto()` agrega el objeto al array mediante `push()`, actualizando el listado.

## Ejecutar

Después de extraer el ZIP:

```bash
npm install
npm start
```

Luego abre la dirección que indique Angular CLI, normalmente:

```text
http://localhost:4200
```

## Nota

El proyecto está preparado como aplicación Angular standalone.
