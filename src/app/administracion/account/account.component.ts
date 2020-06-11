import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../servicios/account.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddRoleDTO } from '../../clases/add-role-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

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
        alert("Se ha agregado exitosamente");
        this.vaciarCampos();
      },
      (error)=>{
        alert("Ha ocurrido un error durante el agregado");
      }
    );
  }

  vaciarCampos(){
    this.formulario.controls['email'].setValue("");
    this.formulario.controls['rol'].setValue("");
  }
}
