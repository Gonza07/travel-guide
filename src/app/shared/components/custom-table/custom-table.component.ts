import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CountryData } from '../../interfaces/country';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-table.component.html',
  styleUrl: './custom-table.component.scss'
})
export class CustomTableComponent implements OnChanges {
  @Input() data:Array<CountryData> = []

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Countries', this.data);

  }

}
