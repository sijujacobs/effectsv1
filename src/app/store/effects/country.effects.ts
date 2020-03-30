import { CountryService } from "src/app/services/CountryService";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import {
  LoadDataBeginAction,
  LoadDataSuccessAction,
  LoadDataFailureAction
} from "../actions/country.actions";
import * as CountryActionTypes from "../actions/action.types";
import { map, mergeMap, catchError } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class CountryEffects {
  constructor(
    private actions$: Actions,
    private countryService: CountryService
  ) {}
  @Effect() loadShopping$ = this.actions$.pipe(
    ofType<LoadDataBeginAction>(CountryActionTypes.LOAD_DATA_BEGIN),
    mergeMap(action =>
      this.countryService.getCountries(action.payload).pipe(
        map(data => {
          return new LoadDataSuccessAction(data);
        }),
        catchError(error => of(new LoadDataFailureAction(error)))
      )
    )
  );
}

// @Effect() loadShopping$ = this.actions$
// .pipe(
//   ofType<LoadShoppingAction>(ShoppingActionTypes.LOAD_SHOPPING),
//   mergeMap(
//     () => this.shoppingService.getShoppingItems()
//       .pipe(
//         map(data => {
//           return new LoadShoppingSuccessAction(data)
//         }),
//         catchError(error => of(new LoadShoppingFailureAction(error)))
//       )
//   ),
// )
