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
    return this.http.get(this.apiURL);
  }
  create(datos:Categoria){
    return this.http.post(this.apiURL, datos);
  }
  get(id:number){
    return this.http.get(this.apiURL + '/' + id);
  }
  edit(datos:Categoria){
    return this.http.put(this.apiURL + '/' + datos.id_Categoria, datos);
  }
  delete(id:number){
    return this.http.delete(this.apiURL + '/' + id);
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