import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { FORECAST_KEY, FORECAST_ROOT } from '../constants/constants';

@Injectable()       //this means the service can have dependency injected into it
export class WeatherService{ 

    constructor(private jsonp: Jsonp){ } //the instance of the json library is created with the instance of the service  
    getCurrentLocation(): [number,number] {         //get user location based on browsers geolocation API
        if(navigator.geolocation) { 
            navigator.geolocation.getCurrentPosition(pos => {
                console.log("Position: ", pos.coords.latitude, ",", pos.coords.longitude);  //TODO: REMOVE
            },
            err => console.error("Unable to get the position - ", err));       //if cannot get location
        }else {     //if geolocation is not available
            console.error("Geolocation is not available");
            return [0,0]
        }
    }

    getCurrentWeather(lat: number, long: number): Observable<any>{
        const url = FORECAST_ROOT + FORECAST_KEY + '/' + lat + ',' + long;
        const queryParams = "?callback=JSONP_CALLBACK";

        return this.jsonp.get(url + queryParams)
        .map(data => data.json())
        .catch(err => {
            console.error("Unable to get weather data -", err);
            return Observable.throw(err.json())
        })
    }
}