import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio.component';
import { LoginComponent } from './login.component';
import { PrivadoComponent } from './privado.component';
import { apiReducer } from './store/api.reducer';
import { authGuard } from './guards/auth.guard';
import { API_CONFIG, ApiConfig } from './tokens/api-config.token';
import { LoggerService, ConsoleLoggerService } from './services/logger.service';
import { BaseNotifier, EmailNotifier } from './services/notifier.service';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'privado', component: PrivadoComponent, canActivate: [authGuard] }
];

const apiConfig: ApiConfig = {
  baseUrl: 'http://localhost:3000/api',
  applicationName: 'Curso Angular'
};

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    PrivadoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({ api: apiReducer })
  ],
  providers: [
    // InjectionToken propio con un literal de configuración.
    { provide: API_CONFIG, useValue: apiConfig },

    // Vincula la abstracción LoggerService con una clase concreta.
    { provide: LoggerService, useClass: ConsoleLoggerService },

    // useExisting hace que BaseNotifier y EmailNotifier compartan
    // la misma instancia de EmailNotifier.
    { provide: EmailNotifier, useClass: EmailNotifier },
    { provide: BaseNotifier, useExisting: EmailNotifier }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}