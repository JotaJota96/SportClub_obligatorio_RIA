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
  private loginDataStoreKey:string = "loginData";

  constructor(protected http: HttpClient) { }

  login(datos:LoginDTO){
    return this.http.post<LoginResponseDTO>(this.apiURL + '/login', datos).pipe(
      tap((data) => {
        localStorage.setItem(this.loginDataStoreKey, JSON.stringify(data));
      })
    );
  }

  register(datos:RegistroDTO){
    return this.http.post<LoginResponseDTO>(this.apiURL+'/register', datos).pipe(
      tap((data) => {
        localStorage.setItem(this.loginDataStoreKey, JSON.stringify(data));
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
    localStorage.removeItem(this.loginDataStoreKey); 
  }

  /**
   * Devuelve los datos del usuario guardado en localstorage, o NULL si no hay ninguno
   */
  private obtenerUsuarioAlmacenado():LoginResponseDTO{
    return JSON.parse(localStorage.getItem(this.loginDataStoreKey))
  }

  /**
   * Devuelve true si hay un usuario logueado actualmente
   */
  isLogged(){
    let loginData:LoginResponseDTO = this.obtenerUsuarioAlmacenado();
    if (loginData != null){
      return true;
    }else{
      return false;
    }
  }
  /**
   * Devueve true si el rol del usuario logueado es USER
   */
  isUser():boolean{
    let loginData:LoginResponseDTO = this.obtenerUsuarioAlmacenado();
    if (loginData == null){
      return false;
    }
    return loginData.roles.includes("USER");
  }

  /**
   * Devueve true si el rol del usuario logueado es SECRETARIA
   */
  isSecretary():boolean{
    let loginData:LoginResponseDTO = this.obtenerUsuarioAlmacenado();
    if (loginData == null){
      return false;
    }
    return loginData.roles.includes("SECRETARIA");
  }

  /**
   * Devueve true si el rol del usuario logueado es ADMIN
   */
  isAdmin():boolean{
    let loginData:LoginResponseDTO = this.obtenerUsuarioAlmacenado();
    if (loginData == null){
      return false;
    }
    return loginData.roles.includes("ADMIN");
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