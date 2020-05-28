import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginDTO } from '../clases/login-dto';
import { RegistroDTO } from '../clases/registro-dto';
import { LoginResponseDTO } from '../clases/login-response-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private apiURL: string = 'http://159.65.222.132:802/api/Account';

  constructor(protected http: HttpClient) { }

  login(datos:LoginDTO){
    /*
    Recordar almacenar los datos obtenidos con:
    localStorage.setItem("loginData", JSON.stringify(data));
    */
    return this.http.post<LoginResponseDTO>( this.apiURL + '/login', datos);
  }

  register(datos:RegistroDTO){
    /*
    Recordar almacenar los datos obtenidos con:
    localStorage.setItem("loginData", JSON.stringify(data));
    */
    return this.http.post<LoginResponseDTO>(this.apiURL+'/register', datos);
  }
}
/*
Account
    POST
    ​/api​/Account​/login
    POST
    ​/api​/Account​/register
*/