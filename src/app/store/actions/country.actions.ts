import { Action } from "@ngrx/store";
import * as ActionTypes from "../actions/action.types";
import { ICountry } from "src/app/models/Country";

export class LoadDataBeginAction implements Action {
  readonly type = ActionTypes.LOAD_DATA_BEGIN;
  constructor(public payload: string) {}
}

export class LoadDataSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_DATA_SUCCESS;
  constructor(public payload: ICountry[]) {}
}
export class LoadDataFailureAction implements Action {
  readonly type = ActionTypes.LOAD_DATA_FAILURE;
  constructor(public payload: { error: any }) {}
}

export type CountryActions =
  | LoadDataBeginAction
  | LoadDataSuccessAction
  | LoadDataFailureAction;
