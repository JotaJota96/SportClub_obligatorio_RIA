import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../clases/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private apiURL: string = 'http://159.65.222.132:802/api/Personas';

  constructor(protected http: HttpClient) { }

  getAll(){
    return this.http.get<Persona[]>(this.apiURL);
  }
  create(datos:Persona){
    return this.http.post<Persona>(this.apiURL, datos);
  }
  get(id:number){
    return this.http.get<Persona>(this.apiURL + '/' + id);
  }
  edit(datos:Persona){
    return this.http.put<Persona>(this.apiURL + '/' + datos.id_Persona, datos);
  }
  delete(id:number){
    return this.http.delete<Persona>(this.apiURL + '/' + id);
  }
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