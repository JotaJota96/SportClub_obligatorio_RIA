import { Component, OnInit } from '@angular/core';
import { AccountService } from '../servicios/account.service';
import { OpcionMenu } from './opcion-menu';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit {

  opcionesMenu:OpcionMenu[];

  constructor(protected accServ:AccountService) {}

  ngOnInit(): void {
    this.opcionesMenu = new Array();

    if (this.accServ.isSecretary()){
      this.opcionesMenu.push(new OpcionMenu("Medios de Pago",       "/mediosDePago"      ));
      this.opcionesMenu.push(new OpcionMenu("Convenios",            "/convenios"         ));
      this.opcionesMenu.push(new OpcionMenu("Categorias",           "/categorias"        ));
      this.opcionesMenu.push(new OpcionMenu("Actividadesa",         "/actividadesa"      ));
      this.opcionesMenu.push(new OpcionMenu("Prestadores de Salud", "/prestadoresDeSalud"));
      this.opcionesMenu.push(new OpcionMenu("Precios",              "/precios"           ));
      this.opcionesMenu.push(new OpcionMenu("Personas",             "/personas"          ));
      this.opcionesMenu.push(new OpcionMenu("Conratos",             "/conratos"          ));
    }
    if (this.accServ.isAdmin()){
      this.opcionesMenu.push(new OpcionMenu("Administrar Roles", "/account"           ));
      this.opcionesMenu.push(new OpcionMenu("Noticias",          "/noticias"          ));
    }
  }
}
