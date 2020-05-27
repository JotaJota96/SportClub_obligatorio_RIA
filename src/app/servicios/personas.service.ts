import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private apiURL: string = "http://159.65.222.132:802/api/Personas";

  constructor(protected http: HttpClient) { }
}
/*
Personas
    GET
    ​/api​/Personas
    POST
    ​/api​/Personas
    GET
    ​/api​/Personas​/{id}
    PUT
    ​/api​/Personas​/{id}
    DELETE
    ​/api​/Personas​/{id}
*/