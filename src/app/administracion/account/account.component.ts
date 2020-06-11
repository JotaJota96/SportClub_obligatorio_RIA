import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountService } from '../../servicios/account.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddRoleDTO } from '../../clases/add-role-dto';
import { Router } from '@angular/router';
import { AlertsComponent } from '../alerts/alerts.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @ViewChild('alertMsj') alertMsj:AlertsComponent = new AlertsComponent();


  public formulario: FormGroup;
  listaRoles:string[];

  constructor(protected accServ:AccountService,
                private router:Router) {

    }

  ngOnInit(): void {
    this.verificarPermisos();

    this.formulario = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(2),Validators.maxLength(50)]),
      rol: new FormControl('', [Validators.required]),
    });

    this.accServ.getRoles().subscribe(
      (roles) =>{
        this.listaRoles = roles;
      }
    );
  }

  private verificarPermisos():void{
    if ( ! this.accServ.isAdmin()){
      this.router.navigate(['/administracion']);
    }
  }

  confirmar(){
    let email = this.formulario.controls['email'].value;
    let indiceRol = this.formulario.controls['rol'].value;

    let datos = new AddRoleDTO(email, this.listaRoles[indiceRol]);
    console.log(datos);
    this.accServ.asignarRol(datos).subscribe(
      (ok)=>{
        //hacer algo si login es correcto
        this.alertMsj.mostrar("success", "Se ha asignado el rol exitosamente", 4);
        this.vaciarCampos();
      },
      (error)=>{
        this.alertMsj.mostrar("danger", "Ha ocurrido un error durante la asignación del rol", 4);
      }
    );
  }

  vaciarCampos(){
    this.formulario.controls['email'].setValue("");
    this.formulario.controls['rol'].setValue("");
  }
}
