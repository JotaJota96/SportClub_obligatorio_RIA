import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponseDTO } from '../clases/login-response-dto';

@Injectable({
  providedIn: 'root'
})
export class InterceptorTokenService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Entro al interceptor")
    let loginData:LoginResponseDTO = JSON.parse(localStorage.getItem("loginData"));

    console.log("loguinData = " + loginData);

    if (loginData != null){
      console.log("Se agrega el token")
      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + loginData.token
      });
      const copia = req.clone({
        headers
      });
      return next.handle(copia);
    }else{
      console.log("NO se agrega el token")
      const copia = req.clone();
      return next.handle(copia);
    }
  }


}
