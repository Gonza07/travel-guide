export interface UnsplashPhoto {
  results:Array<any>;
  total:number;
  total_pages:number;
}

export interface CountryCarouselImage {
  id: string,
  url: string;
  description: string | null;
}

export interface UnsplashPhotoLocation {
  location: {
    name: string | null;
    city: string | null;
    country: string | null;
    position: {
      latitude: number | null;
      longitude: number | null;
    };
  };
}