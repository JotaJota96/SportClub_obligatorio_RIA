import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {

  private apiURL: string = "http://159.65.222.132:802/WeatherForecast";

  constructor(protected http: HttpClient) { }
}
/*
WeatherForecast
    GET
    ​/WeatherForecast
    GET
    ​/WeatherForecast​/close
*/