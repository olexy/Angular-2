import { Component } from '@angular/core';
import { WeatherService } from '../service/widget.service'
import { Weather } from '../model/weather';

@Component({
    moduleId:module.id,
    selector:'widget',
    templateUrl:'widget.component.html',
    styleUrls:['widget.component.css'],
    providers: [ WeatherService]

})

export class WeatherComponent{
    pos: Position;
    weatherData = new Weather(null, null, null, null, null);    // new instance of weather class with null values

    constructor(private service: WeatherService){               //constructor is used to create an instance of the component
        this.service.getCurrentLocation()
        .subscribe(position => {
            this.pos = position
            this.service.getCurrentWeather(this.pos.coords.latitude, this.pos.coords.longitude)                 //require subscription since its an observable method
            .subscribe(weather => console.log(weather),
            err => console.error(err));
        },
        err => console.error(err));      
    }
}