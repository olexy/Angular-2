import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component'  //importing the root component
import { CardComponent } from './card/card.component'  //importing the card component


@NgModule({
    imports: [ BrowserModule],
    declarations: [         //making the components available for use
        AppComponent,
        CardComponent
    ], 
    bootstrap: [ AppComponent ]     //the starting point of the app to load the component
})

export class AppModule { }