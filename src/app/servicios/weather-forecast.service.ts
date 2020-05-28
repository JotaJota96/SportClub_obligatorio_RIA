import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherForecast } from '../clases/weather-forecast';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {

  private apiURL: string = environment.apiURL + '/WeatherForecast';

  constructor(protected http: HttpClient) { }

  getAll(){
    return this.http.get<WeatherForecast[]>(this.apiURL);
  }
  getAllClose(id:number){
    return this.http.get<WeatherForecast[]>(this.apiURL + '/close');
  }
}
/*
WeatherForecast
    GET
    ​/WeatherForecast
    GET
    ​/WeatherForecast​/close
*/