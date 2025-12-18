import { Component, OnInit } from '@angular/core';

import { HeaderComponent } from '../../core/header/header.component';
import { HomeService } from './services/home-service';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { CustomCarouselComponent } from '../../shared/custom-carousel/custom-carousel.component';
import {
  CountryCarouselImage,
  UnsplashPhoto,
} from '../../shared/interfaces/country-images';
import { CustomCardComponent } from '../../shared/components/custom-card/custom-card.component';
import { take } from 'rxjs';
import { CountryData } from '../../shared/interfaces/country';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { fadeAnimation } from './animations/home.animations';
import { CustomNewsComponent } from '../../shared/custom-news/custom-news.component';
import { CustomTableComponent } from '../../shared/components/custom-table/custom-table.component';
import { MapComponent } from '../../shared/components/map/map.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    CustomTableComponent,
    NgxSpinnerModule,
    CustomCarouselComponent,
    CustomCardComponent,
    CommonModule,
    MatButtonToggleModule,
    MatIconModule,
    FormsModule,
    CustomNewsComponent,
    MapComponent
  ],
  animations: [fadeAnimation],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  viewMode: 'table' | 'card' = 'table';
  public countries: Array<CountryData> = [];
  public carouselImages: Array<CountryCarouselImage> = [];
  public popularTripsImages: Array<CountryCarouselImage> = [];
  public inPromotionTours: Array<CountryCarouselImage> = [];
  public recomendationTitle = "Need some recomendation? Check this maigcal tour !"
  public recomendationDescription = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorem voluptatum iusto labore. Mollitia, quasi accusamus! Itaque rerum delectus quod dolorem fugit inventore sint libero, ut quo esse, et cupiditate."
  public selectedLocation?: { lat: number; lng: number };
  constructor(
    private homeServices: HomeService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.getAllCountries();
    this.getImages();
  }

  public getAllCountries(): void {
    this.homeServices.getAllCountries().subscribe({
      next: (incomingCountries: Array<CountryData>) => {
        this.spinner.show();
        this.countries = incomingCountries.slice(0, 5);
        console.log('countriesssss ', this.countries);
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

  public getImages(): void {
    this.homeServices.getCountryImages().subscribe({
      next: (images: UnsplashPhoto) => {
        this.spinner.show();

        this.carouselImages = images.results.map((img: any) => ({
          id: img.id,
          url: img.urls.raw + '&w=2900&h=1000&fit=crop',
          description: img.alt_description,
        }));

        this.popularTripsImages = images.results.map((img: any) => ({
          id: img.id,
          url: img.urls.raw + '&w=2300&h=2000&fit=crop',
          description: img.alt_description,
        }));

        this.inPromotionTours = images.results
          .map((img: any) => ({
            id: img.id,
            url: img.urls.raw + '&w=1500&h=700&fit=crop',
            description: img.alt_description,
          }))
          .slice(4, 5);
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

  public onLocate(location: { lat: number; lng: number }) {
    console.log(location);
    
  this.selectedLocation = location;
}
}
