import { Component, OnInit } from '@angular/core';
import { AccountService } from '../servicios/account.service';
import { OpcionMenu } from './opcion-menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit {

  opcionesMenu:OpcionMenu[];

  constructor(protected accServ:AccountService, private router:Router) {}

  ngOnInit(): void {
    this.verificarPermisos();
    
    this.opcionesMenu = new Array();

    if (this.accServ.isSecretary()){
      this.opcionesMenu.push(new OpcionMenu("Medios de Pago",       "/administracion/mediosDePago"      ));
      this.opcionesMenu.push(new OpcionMenu("Convenios",            "/administracion/convenios"         ));
      this.opcionesMenu.push(new OpcionMenu("Categorias",           "/administracion/categorias"        ));
      this.opcionesMenu.push(new OpcionMenu("Actividadesa",         "/administracion/actividadesa"      ));
      this.opcionesMenu.push(new OpcionMenu("Prestadores de Salud", "/administracion/prestadoresDeSalud"));
      this.opcionesMenu.push(new OpcionMenu("Precios",              "/administracion/precios"           ));
      this.opcionesMenu.push(new OpcionMenu("Personas",             "/administracion/personas"          ));
      this.opcionesMenu.push(new OpcionMenu("Contratos",            "/administracion/conratos"          ));
    }
    if (this.accServ.isAdmin()){
      this.opcionesMenu.push(new OpcionMenu("Administrar Roles", "/administracion/account"           ));
      this.opcionesMenu.push(new OpcionMenu("Noticias",          "/administracion/noticias"          ));
    }
  }

  private verificarPermisos():void{
    if ( ! this.accServ.isAdmin() && ! this.accServ.isSecretary()){
      this.router.navigate(['']);
    }
  }
}
