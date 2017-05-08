import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherComponent } from './widget/component/widget.component';

import { SpeedUnitPipe } from './widget/pipe/speed-unit.pipe';
import { TempUnitPipe } from './widget/pipe/temp-unit.pipe';

@NgModule({
    imports: [ BrowserModule, JsonpModule],
    declarations: [ AppComponent,
    WeatherComponent, 
    SpeedUnitPipe,
    TempUnitPipe], //making the component available for use
    bootstrap: [ AppComponent ]     //the starting point of the app to load the component
})

export class AppModule { }