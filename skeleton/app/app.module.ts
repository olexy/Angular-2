import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component'

@NgModule({
    imports: [ BrowserModule],
    declarations: [ AppComponent ], //making the component available for use
    bootstrap: [ AppComponent ]     //the starting point of the app to load the component
})

export class AppModule { }