import { Component, OnInit } from "@angular/core";
import { CountryService } from "./services/CountryService";
import { ICountry } from "./models/Country";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "./models/AppState";
import { LoadDataBegin } from "./store/actions/country.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "effectsv1";

  countries$: Observable<ICountry[]>;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    console.log("---------AppComp :: ngOnInit ---------------");
    // this.countries$ = this.service.getCountries("amer"); //Without ngStore
    // this.countries$ = this.store.select(store => store.countries);// With ngStore
    this.countries$ = this.store.select(store => store.country.countries);
    this.store.dispatch(new LoadDataBegin());
  }
}
