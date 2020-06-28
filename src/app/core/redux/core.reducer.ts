import { LayoutState } from './core.state';
import * as fromAction from './core.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const initiateState: LayoutState = {
    expandSideBar: false,
};

export function reducer(state = initiateState, action: fromAction.All) : LayoutState {
    switch(action.type) {
        case fromAction.EXPAND_SIDE_BAR:
            return { ...state, expandSideBar: true };
        case fromAction.COLLAPSE_SIDE_BAR:
            return { ...state, expandSideBar: false };
        case fromAction.TOGGLE_SIDE_BAR:
            return { ...state, expandSideBar: !state.expandSideBar };
        default:
            return state;
    }
}

export const getLayoutState = createFeatureSelector<LayoutState>('layoutState');

export const expandSideBar = createSelector(
    getLayoutState,
    (state: LayoutState) => state.expandSideBar
)