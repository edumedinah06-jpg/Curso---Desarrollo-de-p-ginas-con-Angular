import { Component, Inject } from '@angular/core';
import { API_CONFIG, ApiConfig } from './tokens/api-config.token';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html'
})
export class InicioComponent {
  constructor(
    @Inject(API_CONFIG) public config: ApiConfig,
    private logger: LoggerService
  ) {
    this.logger.log('Inicio cargado correctamente.');
  }
}