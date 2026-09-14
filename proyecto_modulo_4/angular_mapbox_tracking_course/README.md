# Proyecto integrador Angular — Mapbox + Tracking + Redux + Cypress

## Requisitos cubiertos

1. `ngx-mapbox-gl` y `@types/mapbox-gl@0.49.0` están declarados en `package.json`.
2. Existe un marker de Mapbox con click que muestra un popup.
3. `AnimatedPanelComponent` tiene una animación cuando cambia `count`.
4. `ClickTrackingDirective` registra clicks.
5. La directiva inyecta `ElementRef` y usa `fromEvent(..., 'click')`.
6. Los templates usan `[appClickTracking]` y `data-tracking-tag`.
7. NgRx actualiza los contadores y la UI los consume reactivamente.
8. `tracking.reducer.spec.ts` prueba los reducers y su inmutabilidad.
9. Cypress está instalado y existen 3 pruebas E2E propias.
10. Existe `.circleci/config.yml`.

## Instalación

```bash
npm install
```

## Verificación de Mapbox

```bash
npm ls ngx-mapbox-gl
npm ls @types/mapbox-gl
```

## Ejecutar

```bash
npm start
```

## Tests

```bash
npm test
npm run cypress:run
```

> Nota: para visualizar el mapa de Mapbox se necesita un token real. Sustituye el valor de `accessToken` en `src/app/map/map.component.ts` por tu token de Mapbox.
