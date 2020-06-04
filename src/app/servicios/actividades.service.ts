import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actividad } from '../clases/actividad';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

  private apiURL: string = environment.apiURL + '/Actividades';

  constructor(protected http: HttpClient) { }

  getAll(){
    return this.http.get<Actividad[]>(this.apiURL);
  }
  create(datos:Actividad){
    return this.http.post<Actividad>(this.apiURL, datos);
  }
  get(id:number){
    return this.http.get<Actividad>(this.apiURL + '/' + id);
  }
  edit(datos:Actividad){
    return this.http.put<Actividad>(this.apiURL + '/' + datos.id, datos);
  }
  delete(id:number){
    return this.http.delete<Actividad>(this.apiURL + '/' + id);
  }
}
/*
Actividades
    GET
    ​/api​/Actividades
    POST
    ​/api​/Actividades
    GET
    ​/api​/Actividades​/{id}
    PUT
    ​/api​/Actividades​/{id}
    DELETE
    ​/api​/Actividades​/{id}
*/