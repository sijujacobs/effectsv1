import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { ICountry } from "../models/Country";
import { map, catchError } from "rxjs/operators";
@Injectable({ providedIn: "root" })
export class CountryService {
  baseURL: string = "https://restcountries.eu/rest/v2/name/";

  constructor(private http: HttpClient) {}

  getCountries(term: string): Observable<ICountry[]> {
    console.log("CountryAPI----------- term :  ", term);
    const res = this.http.get(`${this.baseURL}${term}`).pipe(
      map((response: ICountry[]) => {
        return response;
      }),
      catchError(error => {
        return throwError("Error in Observable");
      })
    );
    return res;
  }
}

// observableSearch(term: string): Observable<Country[]> {
//     return this.http.get(`${this.baseURL}${term}`).pipe(
//       map((data: Country[]) => {
//         return data;
//       }),
//       catchError(error => {
//         return throwError("Error in Observable");
//       })
//     );
//   }
