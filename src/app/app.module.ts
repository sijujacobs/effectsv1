import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { HttpClientModule } from "@angular/common/http";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { AppComponent } from "./app.component";
import { CountryReducer } from "./store/reducers/country.reducer";
import { environment } from "src/environments/environment";
import { EffectsModule } from "@ngrx/effects";
import { CountryEffects } from "./store/effects/country.effects";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ country: CountryReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([CountryEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
// https://developer.school/introduction-to-ngrx-store/
// https://developer.school/introduction-to-ngrx-effects/
