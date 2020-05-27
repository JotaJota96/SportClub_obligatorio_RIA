import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherForecast } from '../clases/weather-forecast';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {

  private apiURL: string = "http://159.65.222.132:802/WeatherForecast";

  constructor(protected http: HttpClient) { }

  getAll(){

  }
  create(datos:WeatherForecast){
    
  }
  get(id:number){
    
  }
  edit(datos:WeatherForecast){
    
  }
  delete(id:number){
    
  }
}
/*
WeatherForecast
    GET
    ​/WeatherForecast
    GET
    ​/WeatherForecast​/close
*/