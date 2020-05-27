import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Precio } from '../clases/precio';

@Injectable({
  providedIn: 'root'
})
export class PreciosService {

  private apiURL: string = "http://159.65.222.132:802/api/Precios";

  constructor(protected http: HttpClient) { }

  getAll(){
    return this.http.get(this.apiURL);
  }
  create(datos:Precio){
    return this.http.post(this.apiURL, datos);
  }
  get(id:number){
    return this.http.get(this.apiURL + '/' + id);
  }
  edit(datos:Precio){
    return this.http.put(this.apiURL + '/' + datos.id, datos);
  }
  delete(id:number){
    return this.http.delete(this.apiURL + '/' + id);
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