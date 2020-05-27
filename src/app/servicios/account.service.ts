import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginDTO } from '../clases/login-dto';
import { RegistroDTO } from '../clases/registro-dto';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private apiURL: string = "http://159.65.222.132:802/api/Account​";

  constructor(protected http: HttpClient) { }

  login(datos:LoginDTO){

  }

  register(datos:RegistroDTO){

  }
}
/*
Account
    POST
    ​/api​/Account​/login
    POST
    ​/api​/Account​/register
*/