import { Action } from "@ngrx/store";
import * as ActionTypes from "../actions/action.types";
import { ICountry } from "src/app/models/Country";

export class LoadDataBegin implements Action {
  readonly type = ActionTypes.LOAD_DATA_BEGIN;
}

export class LoadDataSuccess implements Action {
  readonly type = ActionTypes.LOAD_DATA_SUCCESS;
  constructor(public payload: ICountry[]) {}
}
export class LoadDataFailure implements Action {
  readonly type = ActionTypes.LOAD_DATA_FAILURE;
  constructor(public payload: { error: any }) {}
}

export type CountryAction = LoadDataBegin | LoadDataSuccess | LoadDataFailure;
