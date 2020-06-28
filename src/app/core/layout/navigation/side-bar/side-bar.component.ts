import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAction from '../../../../core/redux/core.actions';
import { LayoutState } from '../../../redux/core.state';
import * as sidebarReducer from '../../../redux/core.reducer';

@Component({
    selector: 'side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit, AfterViewInit {
    expandSideBar: boolean = false;
    expandGame: boolean = false;

    constructor(
        private store: Store<LayoutState>
    ) {}

    ngOnInit() {}

    ngAfterViewInit() {
        this.store.select(sidebarReducer.expandSideBar)
            .subscribe(data => this.expandSideBar = data);
    }

    showSubMenuGame() {
        this.expandSideBar = true;
        this.expandGame = !this.expandGame;

        this.store.dispatch(new fromAction.ExpandSideBarAction);
    }
}