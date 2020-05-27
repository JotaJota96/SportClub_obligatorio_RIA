import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../clases/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private apiURL: string = "http://159.65.222.132:802/api/Categorias";

  constructor(protected http: HttpClient) { }

  getAll(){

  }
  create(datos:Categoria){
    
  }
  get(id:number){
    
  }
  edit(datos:Categoria){
    
  }
  delete(id:number){
    
  }
}
/*
Categorias
    GET
    ​/api​/Categorias
    POST
    ​/api​/Categorias
    GET
    ​/api​/Categorias​/{id}
    PUT
    ​/api​/Categorias​/{id}
    DELETE
    ​/api​/Categorias​/{id}
*/