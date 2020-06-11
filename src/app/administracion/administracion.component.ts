import { Component, OnInit } from '@angular/core';
import { AccountService } from '../servicios/account.service';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit {

  constructor(protected accServ:AccountService) { }

  ngOnInit(): void {
  }

  mostrarOpcionesAdmin():boolean {
    return this.accServ.isLogged() && this.accServ.isAdmin();
  }
}
