import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.css']
})
export class PreciosComponent implements OnInit {

  isModalVisible:boolean = false; //se muestra o no el modal
  accionAgregar:boolean = true; //si esta en true es agregar, si esta en false es modificar

  titulo:string ="";

  public profileForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      valor: new FormControl('', [Validators.required, Validators.minLength(1),Validators.maxLength(10)]),
      fechaDeVigencia: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]),
      categoria: new FormControl('', [Validators.required, Validators.minLength(2),Validators.maxLength(50)]),
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
    this.profileForm.controls['valor'].setValue("");
    this.profileForm.controls['fechaDeVigencia'].setValue("");
    this.profileForm.controls['categoria'].setValue("");
    
  }
}
