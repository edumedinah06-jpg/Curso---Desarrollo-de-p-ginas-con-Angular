import { Component } from '@angular/core';
import { MapComponent, MarkerComponent, PopupComponent } from 'ngx-mapbox-gl';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [MapComponent, MarkerComponent, PopupComponent],
  templateUrl: './map.component.html'
})
export class MapDemoComponent {
  readonly accessToken = 'pk.eyJ1IjoiZGVtbyIsImEiOiJjbGZha2V0b2tlbiJ9.fake';
  showPopup = false;
  readonly center: [number, number] = [-86.793, 14.072];

  togglePopup(): void {
    this.showPopup = true;
  }
}