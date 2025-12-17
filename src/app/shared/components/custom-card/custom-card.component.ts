import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
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
  @Output() locate = new EventEmitter<{ lat: number; lng: number }>();
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
        const imageLat = data.location.position.latitude;
        const imageLng = data.location.position.longitude;

        if (imageLat && imageLng) {
          this.locate.emit({ lat: imageLat, lng: imageLng });
        }
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
