import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { AppState } from "./app.states";
import * as sidebarReducer from "../core/redux/core.reducer";

export const reducers: ActionReducerMap<AppState> = {
    layoutState: sidebarReducer.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = [];