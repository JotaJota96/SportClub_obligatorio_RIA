import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginDTO } from '../clases/login-dto';
import { RegistroDTO } from '../clases/registro-dto';
import { LoginResponseDTO } from '../clases/login-response-dto';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private apiURL: string = 'http://159.65.222.132:802/api/Account';

  constructor(protected http: HttpClient) { }

  login(datos:LoginDTO){
    return this.http.post<LoginResponseDTO>(this.apiURL + '/login', datos).pipe(
      tap((data) => {
        localStorage.setItem("loginData", JSON.stringify(data));
      })
    );
  }

  register(datos:RegistroDTO){
    return this.http.post<LoginResponseDTO>(this.apiURL+'/register', datos).pipe(
      tap((data) => {
        localStorage.setItem("loginData", JSON.stringify(data));
      })
    );
  }

  logout(){
    localStorage.removeItem("loginData"); 
  }
}
/*
Account
    POST
    ​/api​/Account​/login
    POST
    ​/api​/Account​/register
*/