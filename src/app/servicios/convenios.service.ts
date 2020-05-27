import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConveniosService {

  apiURL: string = "http://159.65.222.132:802/api/Convenios";

  constructor(protected http: HttpClient) { }
}
/*
Convenios
    GET
    ​/api​/Convenios
    POST
    ​/api​/Convenios
    GET
    ​/api​/Convenios​/{id}
    PUT
    ​/api​/Convenios​/{id}
    DELETE
    ​/api​/Convenios​/{id}
*/