import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/servicios/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(protected accServ:AccountService) { }

  ngOnInit(): void {
  }

  mostrarOpcionMenu():boolean{
    return this.accServ.isLogged() && (this.accServ.isSecretary() || this.accServ.isAdmin());
  }

  estoyLogeado():boolean{
    return this.accServ.isLogged(); 
  }

  cerrarSesion():void{
    this.accServ.logout(); 
  }
}
