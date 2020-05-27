import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PreciosService {

  apiURL: string = "http://159.65.222.132:802/api/Precios";

  constructor(protected http: HttpClient) { }
}
/*
Precios
    GET
    ​/api​/Precios
    POST
    ​/api​/Precios
    GET
    ​/api​/Precios​/{id}
    PUT
    ​/api​/Precios​/{id}
    DELETE
    ​/api​/Precios​/{id}
    GET
    ​/Categorias​/{categoriaId}
*/