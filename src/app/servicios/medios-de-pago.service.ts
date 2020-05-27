import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MediosDePagoService {

  private apiURL: string = "http://159.65.222.132:802/api/MediosDePago";

  constructor(protected http: HttpClient) { }
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