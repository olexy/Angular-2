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
        
    }
    


}