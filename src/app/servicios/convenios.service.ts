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

  }
  create(datos:Convenio){
    
  }
  get(id:number){
    
  }
  edit(datos:Convenio){
    
  }
  delete(id:number){
    
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