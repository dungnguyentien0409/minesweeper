import { Action } from '@ngrx/store';

export const EXPAND_SIDE_BAR = '[SIDE-BAR] Expand';
export const COLLAPSE_SIDE_BAR = '[SIDE-BAR] Collapse';
export const TOGGLE_SIDE_BAR = '[SIDE-BAR] Toggle';

export class ExpandSideBarAction implements Action {
    readonly type = EXPAND_SIDE_BAR;
}

export class CollapseSideBar implements Action {
    readonly type = COLLAPSE_SIDE_BAR;
}

export class ToggleSideBar implements Action {
    readonly type = TOGGLE_SIDE_BAR;
}

export type All = ExpandSideBarAction | CollapseSideBar | ToggleSideBar;