import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

  apiURL: string = "http://159.65.222.132:802/api/Actividades";

  constructor(protected http: HttpClient) { }
}
/*
Actividades
    GET
    ​/api​/Actividades
    POST
    ​/api​/Actividades
    GET
    ​/api​/Actividades​/{id}
    PUT
    ​/api​/Actividades​/{id}
    DELETE
    ​/api​/Actividades​/{id}
*/