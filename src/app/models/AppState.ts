import { ICountry } from "./Country";
import { CountryState } from "./CountryState";

export interface AppState {
  // readonly countries: ICountry[];
  readonly country: CountryState;
}
