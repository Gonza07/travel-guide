import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CountryCarouselImage } from '../interfaces/country-images';
import { CommonModule, NgStyle } from '@angular/common';
import { FeaturedTagComponent } from '../components/featured-tag/featured-tag.component';
import { TagTypes } from '../../shared/enums/tag-type.enum'
@Component({
  selector: 'app-custom-news',
  standalone: true,
  imports: [NgStyle, CommonModule, FeaturedTagComponent],
  templateUrl: './custom-news.component.html',
  styleUrl: './custom-news.component.scss',
})
export class CustomNewsComponent implements OnChanges {
  @Input() inPromotion: Array<CountryCarouselImage> = [];
  public promotionTagText: string = "promotion trip"
  TagTypes = TagTypes;

  ngOnChanges(changes: SimpleChanges): void {

  }
}
