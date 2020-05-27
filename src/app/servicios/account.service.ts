import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private apiURL: string = "http://159.65.222.132:802/api/Account​";

  constructor(protected http: HttpClient) { }
}
/*
Account
    POST
    ​/api​/Account​/login
    POST
    ​/api​/Account​/register
*/