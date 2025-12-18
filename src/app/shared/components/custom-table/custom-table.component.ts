import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CountryData } from '../../interfaces/country';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-table.component.html',
  styleUrl: './custom-table.component.scss',
})
export class CustomTableComponent implements OnChanges {
  @Input() data: Array<CountryData> = [];
  @Output() viewLocation = new EventEmitter<{
    lat: number;
    lng: number;
    country: CountryData;
  }>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Countries', this.data);
  }

  public getCountryLocation(country: CountryData): void {
    if (!country.latlng || country.latlng.length !== 2) {
      console.warn('Country without coordinates', country);
      return;
    }

    const [lat, lng] = country.latlng;

    this.viewLocation.emit({
      lat,
      lng,
      country,
    });
  }
}
