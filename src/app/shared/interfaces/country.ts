export interface CountryData {
  capital: Array<string>;
  cca3: string;
    flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  name: {
    common: string;
    official: string;
    nativeName?: {
      [key: string]: {
        official: string;
        common: string;
      }
    };
  };
  population: number;
  region: string;
  subregion: string;
  latlng?: [number, number]
}
