import { Injectable } from '@angular/core';

import { FORECAST_KEY, FORECAST_ROOT } from '../constants/constants';

@Injectable()       //this means the service can have dependency injected into it
export class WeatherService{ 
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
}