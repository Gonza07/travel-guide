import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CountryCarouselImage } from '../interfaces/country-images';

@Component({
  selector: 'app-custom-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-carousel.component.html',
  styleUrl: './custom-carousel.component.scss',
})
export class CustomCarouselComponent implements OnChanges {
  @Input() images: Array<CountryCarouselImage> = [];
  public carouselImages:Array<CountryCarouselImage> = [];
  public loading = false;

  constructor(
    private spinner: NgxSpinnerService
  ) {}

  ngOnChanges(): void {
    this.spinner.show()
    setTimeout(() => {
    
    if(!this.images){
      this.loading = true
      this.spinner.show()
      console.log(2, this.images);
      return
    }
    this.carouselImages = this.images;
    console.log('carousel imgs: ', this.images);
    
    this.loading = false
    this.spinner.hide()
    }, 3000)
  }
}
