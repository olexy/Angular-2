import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/widget.service'
import { Weather } from '../model/weather';

@Component({
    moduleId:module.id,
    selector:'widget',
    templateUrl:'widget.component.html',
    styleUrls:['widget.component.css'],
    providers: [ WeatherService]

})

export class WeatherComponent implements OnInit{
    pos: Position;
    weatherData = new Weather(null, null, null, null, null);    // new instance of weather class with null values
    currentSpeedUnit = "kph";
    currentTempUnit = "fahrenheit";

    constructor(private service: WeatherService){ }              //constructor is used to create an instance of the component
   
    ngOnInit() {
        this.getCurrentLocation();

    }

    getCurrentLocation() {
        this.service.getCurrentLocation()
        .subscribe(position => {
            this.pos = position
            this.getCurrentWeather()                 
        },
        err => console.error(err));
    }

    getCurrentWeather() {
        this.service.getCurrentWeather(this.pos.coords.latitude, this.pos.coords.longitude)                 
            .subscribe(weather => {
                console.log(weather)        //all current data object //TODO: REMOVE
                this.weatherData.temp = weather["currently"]["temperature"],
                this.weatherData.summary= weather["currently"]["summary"],
                this.weatherData.wind = weather["currently"]["windSpeed"],
                this.weatherData.humidity = weather["currently"]["humidity"],
                this.weatherData.icon = weather["currently"]["icon"]
                console.log("Weather: ", this.weatherData); // TODO: REMOVE(FOR TESTING)

            },                 //require subscription since its an observable method
            err => console.error(err));
    }
}