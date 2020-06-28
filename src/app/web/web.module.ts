import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebRoutingModule } from './web-routing.module';
import { RouterModule, Routes, Router } from '@angular/router';


@NgModule({
    imports: [
        CommonModule,
        WebRoutingModule
    ],
    exports: [],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class WebModule { }