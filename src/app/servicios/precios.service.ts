import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Precio } from '../clases/precio';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PreciosService {

  private apiURL: string = environment.apiURL + '/Precios';

  constructor(protected http: HttpClient) { }

  getAll(){
    return this.http.get<Precio[]>(this.apiURL);
  }
  create(datos:Precio){
    return this.http.post<Precio>(this.apiURL, datos);
  }
  get(id:number){
    return this.http.get<Precio>(this.apiURL + '/' + id);
  }
  edit(datos:Precio){
    return this.http.put<Precio>(this.apiURL + '/' + datos.id, datos);
  }
  delete(id:number){
    return this.http.delete<Precio>(this.apiURL + '/' + id);
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