import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PrestadorDeSalud } from '../clases/prestador-de-salud';

@Component({
  selector: 'app-prestadores-de-salud',
  templateUrl: './prestadores-de-salud.component.html',
  styleUrls: ['./prestadores-de-salud.component.css']
})
export class PrestadoresDeSaludComponent implements OnInit {

  isModalVisible:boolean = false; //se muestra o no el modal
  accionAgregar:boolean = true; //si esta en true es agregar, si esta en false es modificar

  titulo:string ="";

  public profileForm: FormGroup;

  constructor() { 
  }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(2),Validators.maxLength(50)]),
      activo: new FormControl(false)
    });
  }

  cerrar(){
    this.vaciarCampos();
    this.isModalVisible = false;
  }

  abrirModificar(indice:number){ //indice en el array del elemento que se quiere modificar
    this.vaciarCampos();
    this.titulo="Modificar";
    //carga los datos correspondientes a esa fila
    this.accionAgregar = false;
    this.isModalVisible = true;//muestra el modal.
  }

  abrirAgregar(){
    this.vaciarCampos();
    this.titulo="Agregar";//determina el titulo del modal
    this.accionAgregar = true;//determina que el modal es de agregar
    this.isModalVisible = true;//abre el modal
  }

  borrar(){
    this.vaciarCampos();
    //borra la fila
  }

  confirmar(){
    this.vaciarCampos();
    //borra la fila
    if(this.accionAgregar){
      //agregar
    }else{
      //modificar
    }
    this.cerrar();//cierra el modal
  }

  vaciarCampos(){
    this.profileForm.controls['nombre'].setValue("");
    this.profileForm.controls['activo'].setValue(false);
  }
}
