import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrestadoresDeSaludService {

  private apiURL: string = "http://159.65.222.132:802/api/PrestadoresDeSalud";

  constructor(protected http: HttpClient) { }

  getAll(){

  }
  create(datos:PrestadorDeSalud){
    
  }
  get(id:number){
    
  }
  edit(datos:PrestadorDeSalud){
    
  }
  delete(id:number){
    
  }
}
/*
PrestadoresDeSalud
    GET
    ​/api​/PrestadoresDeSalud
    POST
    ​/api​/PrestadoresDeSalud
    GET
    ​/api​/PrestadoresDeSalud​/{id}
    PUT
    ​/api​/PrestadoresDeSalud​/{id}
    DELETE
    ​/api​/PrestadoresDeSalud​/{id}
*/