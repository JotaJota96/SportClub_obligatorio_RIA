import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginDTO } from '../clases/login-dto';
import { RegistroDTO } from '../clases/registro-dto';
import { LoginResponseDTO } from '../clases/login-response-dto';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AddRoleDTO } from '../clases/add-role-dto';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private apiURL: string = environment.apiURL + '/Account';

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

  asignarRol(datos:AddRoleDTO){
    return this.http.post(this.apiURL + '/addrole', datos);
  }

  getRoles(){
    return this.http.post<string[]>(this.apiURL + '/roles', null);
  }

  logout(){
    localStorage.removeItem("loginData"); 
  }

  /**
   * Devuelve true si hay un usuario logueado actualmente
   */
  isLogged(){
    let loginData:LoginResponseDTO = JSON.parse(localStorage.getItem("loginData"));
    if (loginData != null){
      return true;
    }else{
      return false;
    }
  }
  /**
   * Devueve true si el rol del usuario logueado es USER
   */
  isUser(){
    return false;
  }

  /**
   * Devueve true si el rol del usuario logueado es SECRETARIA
   */
  isSecretary(){
    return true;
  }

  /**
   * Devueve true si el rol del usuario logueado es ADMIN
   */
  isAdmin(){
    return true;
  }

}
/*
Account
    POST
    ​/api​/Account​/login
    POST
    ​/api​/Account​/register
    POST
    ​/api​/Account​/addrole
    POST
    ​/api​/Account​/roles
  
*/