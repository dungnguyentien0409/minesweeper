import { Component, OnInit } from '@angular/core';
import { LayoutState } from 'src/app/core/redux/core.state';
import { Store } from '@ngrx/store';
import * as fromAction from "../redux/core.actions";

@Component({
    selector: 'my-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    constructor(
            private store: Store<LayoutState>
        ) {}

    ngOnInit() {}

    onClick() {
        this.store.dispatch(new fromAction.CollapseSideBar);
    }
}