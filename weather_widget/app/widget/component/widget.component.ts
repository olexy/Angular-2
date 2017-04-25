import { Component } from '@angular/core';
import { WeatherService } from '../service/widget.service'

@Component({
    moduleId:module.id,
    selector:'widget',
    templateUrl:'widget.component.html',
    styleUrls:['widget.component.css'],
    providers: [ WeatherService]

})

export class WeatherComponent{
    constructor(private service: WeatherService){               //constructor is used to create an instance of the component
        this.service.getCurrentLocation();     
        this.service.getCurrentWeather(0,0)                 //require subscription since its an observable method
            .subscribe(weather => console.log(weather),
            err => console.error(err));
    }
    


}