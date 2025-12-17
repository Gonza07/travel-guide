import { Component, Input, OnChanges } from '@angular/core';
import * as lf from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent implements OnChanges {
  @Input() lat?: number;
  @Input() lng?: number;

  private map?: lf.Map;
  private marker?: lf.Marker;

  ngOnInit() {
    this.map = lf.map('map').setView([-34.9011, -56.1645], 4);

    lf.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap',
    }).addTo(this.map);
  }

  ngOnChanges() {
    if (this.map && this.lat && this.lng) {
      this.map.setView([this.lat, this.lng], 10);

      if (this.marker) {
        this.marker.remove();
      }

      this.marker = lf.marker([this.lat, this.lng]).addTo(this.map);
    }
  }
}
