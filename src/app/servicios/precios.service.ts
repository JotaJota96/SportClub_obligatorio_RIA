import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PreciosService {

  private apiURL: string = "http://159.65.222.132:802/api/Precios";

  constructor(protected http: HttpClient) { }

  getAll(){

  }
  create(datos:Precio){
    
  }
  get(id:number){
    
  }
  edit(datos:Precio){
    
  }
  delete(id:number){
    
  }
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