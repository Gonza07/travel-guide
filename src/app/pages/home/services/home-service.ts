import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { UnsplashPhoto, UnsplashPhotoLocation } from '../../../shared/interfaces/country-images';
import { CountryData } from '../../../shared/interfaces/country';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  public getAllCountries(params = null): Observable<Array<CountryData>> {
    return this.http.get<Array<CountryData>>(
      'https://restcountries.com/v3.1/all?fields=name,cca3,flags,region,subregion,population,capital'
    );
  }

  public getCountryByName(countryName = null) {
    return this.http.get(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${countryName}`
    );
  }

  public getCountryImages(country = null): Observable<UnsplashPhoto>{
    return this.http.get<UnsplashPhoto>(`https://api.unsplash.com/search/photos?query=Uruguay&client_id=${environment.unsplashKey}`)
  }

  public getImageLocation(photoId:string): Observable<UnsplashPhotoLocation>{
     return this.http.get<UnsplashPhotoLocation>(`https://api.unsplash.com/photos/${photoId}?client_id=${environment.unsplashKey}`)
  }
}
