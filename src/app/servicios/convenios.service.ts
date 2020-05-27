import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Convenio } from '../clases/convenio';

@Injectable({
  providedIn: 'root'
})
export class ConveniosService {

  private apiURL: string = "http://159.65.222.132:802/api/Convenios";

  constructor(protected http: HttpClient) { }

  getAll(){
    return this.http.get(this.apiURL);
  }
  create(datos:Convenio){
    return this.http.post(this.apiURL, datos);
  }
  get(id:number){
    return this.http.get(this.apiURL + '/' + id);
  }
  edit(datos:Convenio){
    return this.http.put(this.apiURL + '/' + datos.id, datos);
  }
  delete(id:number){
    return this.http.delete(this.apiURL + '/' + id);
  }
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