import { ICountry } from "./Country";

export interface CountryState {
  countries: ICountry[];
  loading: boolean;
  error: any;
}
