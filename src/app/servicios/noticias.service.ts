import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Noticia } from '../clases/noticia';
import { NoticiasPaginadas } from '../clases/noticias-paginadas';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private apiURL: string = environment.apiURL + '/Noticias';

  constructor(protected http: HttpClient) { }

  getAll(){
    return this.http.get<Noticia[]>(this.apiURL);
  }
  create(datos:Noticia){
    return this.http.post<Noticia>(this.apiURL, datos);
  }
  getActivas(){
    return this.http.get<Noticia[]>(this.apiURL + '/Activas');
  }

  /**
   * @param offset Numero de la pagina (pero empezando en 0)
   * @param limit Cantidad de elementos por pagina
   */
  getPaginado(offset:number, limit:number){
    return this.http.get<NoticiasPaginadas>(this.apiURL + '/Paged/' + offset + '/' + limit);
  }

  get(id:number){
    return this.http.get<Noticia>(this.apiURL + '/' + id);
  }
  edit(datos:Noticia){
    return this.http.put<Noticia>(this.apiURL + '/' + datos.id, datos);
  }
  delete(id:number){
    return this.http.delete<Noticia>(this.apiURL + '/' + id);
  }
}
/*
Noticias
  GET
  ​/api​/Noticias
  POST
  ​/api​/Noticias
  GET
  ​/api​/Noticias​/Activas
  GET
  ​/api​/Noticias​/Paged​/{offset}​/{limit}
  GET
  ​/api​/Noticias​/{id}
  PUT
  ​/api​/Noticias​/{id}
  DELETE
  ​/api​/Noticias​/{id}
*/