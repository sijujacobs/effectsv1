import { Component, OnInit } from "@angular/core";
import { CountryService } from "./services/CountryService";
import { ICountry } from "./models/Country";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "./models/AppState";
import { LoadDataBeginAction } from "./store/actions/country.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "effectsv1";

  countries$: Observable<ICountry[]>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>;
  constructor(private store: Store<AppState>) {}
  // constructor(private service: CountryService) {}

  ngOnInit() {
    // this.countries$ = this.service.getCountries("amer"); //Without ngStore
    // this.countries$ = this.store.select(store => store.countries);// With ngStore

    this.countries$ = this.store.select(store => store.country.countries);
    this.loading$ = this.store.select(store => store.country.loading);
    this.error$ = this.store.select(store => store.country.error);

    this.store.dispatch(new LoadDataBeginAction("amer"));
  }
}
