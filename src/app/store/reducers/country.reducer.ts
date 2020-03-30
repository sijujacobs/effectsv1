import { ICountry } from "src/app/models/Country";
import * as actionTypes from "../actions/action.types";
import { CountryActions } from "../actions/country.actions";
import { State } from "@ngrx/store";
import { CountryState } from "../../models/CountryState";

const initialState: CountryState = {
  countries: [
    {
      name: "TestCountry",
      capital: "TestCapital",
      flag: "TestFlag"
    }
  ],
  loading: false,
  error: undefined
};

export function CountryReducer(
  state: CountryState = initialState,
  action: CountryActions
) {
  console.log("---------Reducer ------------ActionType - ", action);
  switch (action.type) {
    case actionTypes.LOAD_DATA_BEGIN: {
      return {
        ...state,
        loading: true,
        error: null
      };
    }
    case actionTypes.LOAD_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        countries: action.payload
      };
    }
    case actionTypes.LOAD_DATA_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    }
    default: {
      return state;
    }
  }
}
