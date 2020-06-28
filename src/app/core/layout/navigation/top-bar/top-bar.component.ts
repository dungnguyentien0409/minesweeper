import { Component, OnInit } from '@angular/core';
import { Store, select } from '../../../../../../node_modules/@ngrx/store';
import { LayoutState } from '../../../redux/core.state';
import * as layoutReducer from "../../../redux/core.reducer";
import * as fromAction from "../../../redux/core.actions";
import { ViewEncapsulation } from '@angular/core';
import * as sidebarReducer from '../../../redux/core.reducer';

@Component({
    selector: 'top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TopBarComponent implements OnInit {
    expandSideBar = false;

    constructor(private store: Store<LayoutState>
        ) {}

    ngOnInit() { 
        
    }

    ngAfterViewInit() {
        this.store.select(sidebarReducer.expandSideBar)
            .subscribe(data => this.expandSideBar = data);
    }

    toggleSidebar(): void {
        this.store.dispatch(new fromAction.ToggleSideBar());
    }
}
