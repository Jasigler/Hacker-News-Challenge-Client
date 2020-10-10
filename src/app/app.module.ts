import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpTestingController} from '@angular/common/http/testing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        HttpClientModule,
        NgxPaginationModule
    ],
    providers: [HttpClientModule],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
