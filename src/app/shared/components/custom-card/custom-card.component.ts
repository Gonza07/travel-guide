import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CountryCarouselImage } from '../../interfaces/country-images';
import { getRandomInt } from '../../functions/random-number';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HomeService } from '../../../pages/home/services/home-service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-custom-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-card.component.html',
  styleUrl: './custom-card.component.scss',
})
export class CustomCardComponent implements OnChanges {
  @Input() cardImages: Array<CountryCarouselImage> = [];
  public imagesLength: number = 0;
  public selectedIndex?: number = 0;
  public selectedIndexes: number[] = [];

  constructor(
    private router: Router,
    private homeService: HomeService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.cardImages) {
      this.imagesLength = this.cardImages.length;
      this.onImagesLoaded(this.cardImages);
    }
  }

  public getUniqueRandomIndexes(count: number, max: number): number[] {
    const set = new Set<number>();

    while (set.size < count) {
      set.add(getRandomInt(max));
    }

    return Array.from(set);
  }

  public onImagesLoaded(images: CountryCarouselImage[]) {
    this.cardImages = images;
    this.imagesLength = images.length;

    if (this.imagesLength > 0) {
      this.selectedIndexes = this.getUniqueRandomIndexes(3, this.imagesLength);
    }
  }

  public getImageLocation(photoId: string) {
    this.spinner.show();
    this.homeService.getImageLocation(photoId).subscribe({
      next: (data: any) => {
        const lat = data.location.position.latitude;
        const lng = data.location.position.longitude;

        const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
        this.goToMaps(googleMapsUrl)
      },
      error: (err) => {
        this.spinner.hide();
        console.error(err);
      },
      complete: () => {
        this.spinner.hide();
      },
    });
  }

  public goToMaps(url: string): void {
     window.open(url, '_blank', 'noopener,noreferrer');
  }
}
