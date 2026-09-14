import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio.component';
import { FormularioPadreComponent } from './formulario-padre.component';
import { FormularioHijoComponent } from './formulario-hijo.component';
import { VotosComponent } from './votos.component';
import { itemsReducer } from './store/items.reducer';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'formularios', component: FormularioPadreComponent },
  { path: 'votos', component: VotosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FormularioPadreComponent,
    FormularioHijoComponent,
    VotosComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({ items: itemsReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}