import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Contrato } from '../clases/contrato';
import { ContratoDTO } from '../clases/contrato-dto';

@Injectable({
  providedIn: 'root'
})
export class ContratosService {

  private apiURL: string = environment.apiURL + '/Contratos';

  constructor(protected http: HttpClient) { }

  getAll(){
    return this.http.get<Contrato[]>(this.apiURL);
  }
  create(datos:ContratoDTO){
    return this.http.post<Contrato>(this.apiURL, datos);
  }
  get(id:number){
    return this.http.get<Contrato>(this.apiURL + '/' + id);
  }
  edit(datos:ContratoDTO){
    return this.http.put<Contrato>(this.apiURL + '/' + datos.id_Contrato, datos);
  }
  delete(id:number){
    return this.http.delete<Contrato>(this.apiURL + '/' + id);
  }

  getPorPersona​(id:number){
    return this.http.get<Contrato[]>(this.apiURL + '/PorPersona​/' + id);
  }
}
/*
Contratos
  GET
  ​/api​/Contratos
  POST
  ​/api​/Contratos
  GET
  ​/api​/Contratos​/{id}
  PUT
  ​/api​/Contratos​/{id}
  DELETE
  ​/api​/Contratos​/{id}
  GET
  ​/api​/Contratos​/PorPersona​/{idPersona}
*/