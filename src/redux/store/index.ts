import { combineReducers } from "redux";
import { reducer } from "@/redux/store/reducer";
import { AppState } from "@/redux/type/store";

export type ApplicationState = {
  app: AppState;
};

export const createRootReducer = () =>
  combineReducers({
    app: reducer,
  });
