import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MedioDePago } from '../clases/medio-de-pago';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MediosDePagoService {

  private apiURL: string = environment.apiURL + '/MediosDePago';

  constructor(protected http: HttpClient) { }

  getAll(){
    return this.http.get<MedioDePago[]>(this.apiURL);
  }
  create(datos:MedioDePago){
    return this.http.post<MedioDePago>(this.apiURL, datos);
  }
  get(id:number){
    return this.http.get<MedioDePago>(this.apiURL + '/' + id);
  }
  edit(datos:MedioDePago){
    return this.http.put<MedioDePago>(this.apiURL + '/' + datos.id, datos);
  }
  delete(id:number){
    return this.http.delete<MedioDePago>(this.apiURL + '/' + id);
  }
}
/*
MediosDePago
    GET
    ​/api​/MediosDePago
    POST
    ​/api​/MediosDePago
    GET
    ​/api​/MediosDePago​/{id}
    PUT
    ​/api​/MediosDePago​/{id}
    DELETE
    ​/api​/MediosDePago​/{id}
*/