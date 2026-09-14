# Proyecto Angular + Guard + Express + Dexie + Redux/NgRx

Este proyecto cumple los 10 requisitos solicitados.

## 1. Guard con servicio

`src/app/guards/auth.guard.ts` utiliza `AuthService` para verificar `isLoggedIn()`.

La ruta privada está protegida con:

```ts
{ path: 'privado', component: PrivadoComponent, canActivate: [authGuard] }
```

## 2. InjectionToken

`API_CONFIG` es un `InjectionToken<ApiConfig>` propio y recibe una configuración mediante `useValue`.

## 3. useClass

`LoggerService` es una clase abstracta y se vincula con `ConsoleLoggerService` mediante:

```ts
{ provide: LoggerService, useClass: ConsoleLoggerService }
```

## 4. useExisting

`BaseNotifier` utiliza como implementación existente la instancia de `EmailNotifier`:

```ts
{ provide: EmailNotifier, useClass: EmailNotifier },
{ provide: BaseNotifier, useExisting: EmailNotifier }
```

## 5. API Express

La carpeta `server` contiene una API Express con un array en memoria.

GET:

```text
GET http://localhost:3000/api/items
```

POST:

```text
POST http://localhost:3000/api/items
Content-Type: application/json

{
  "nombre": "Nuevo elemento"
}
```

## 6. Servicio Angular + Http

`ApiService` usa `HttpClient` para comunicarse de forma asíncrona con Express.

## 7. API -> Redux

Cuando el POST responde correctamente, `ApiService` ejecuta:

```ts
this.store.dispatch(agregarItemExitoso({ item }));
```

El reducer maneja el Action y agrega el elemento al estado.

## 8. Dexie

`DexieService` crea la base `CursoAngularDB` con una tabla `items`.

Después de un POST exitoso, `ApiService` ejecuta:

```ts
void this.dexie.guardarItem(item);
```

## Cómo ejecutar

Terminal 1, proyecto Angular:

```bash
npm install
npm start
```

Terminal 2, API Express:

```bash
cd server
npm install
npm start
```

Angular:
`http://localhost:4200`

API:
`http://localhost:3000/api/items`

## Prueba del Guard

1. Entra a `/privado` sin iniciar sesión.
2. El Guard te enviará a `/login`.
3. Pulsa "Iniciar sesión".
4. Serás enviado al área privada.
5. Prueba GET y POST.
6. El POST actualiza Redux y guarda el elemento en Dexie.
