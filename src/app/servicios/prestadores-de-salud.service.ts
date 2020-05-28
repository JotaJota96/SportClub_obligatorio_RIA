import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PrestadorDeSalud } from '../clases/prestador-de-salud';

@Injectable({
  providedIn: 'root'
})
export class PrestadoresDeSaludService {

  private apiURL: string = 'http://159.65.222.132:802/api/PrestadoresDeSalud';

  constructor(protected http: HttpClient) { }

  getAll(){
    return this.http.get<PrestadorDeSalud[]>(this.apiURL);
  }
  create(datos:PrestadorDeSalud){
    return this.http.post<PrestadorDeSalud>(this.apiURL, datos);
  }
  get(id:number){
    return this.http.get<PrestadorDeSalud>(this.apiURL + '/' + id);
  }
  edit(datos:PrestadorDeSalud){
    return this.http.put<PrestadorDeSalud>(this.apiURL + '/' + datos.id, datos);
  }
  delete(id:number){
    return this.http.delete<PrestadorDeSalud>(this.apiURL + '/' + id);
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