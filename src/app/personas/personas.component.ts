import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  isModalVisible:boolean = false; //se muestra o no el modal
  accionAgregar:boolean = true; //si esta en true es agregar, si esta en false es modificar

  titulo:string ="";

  public profileForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      primerNombre: new FormControl('', [Validators.required, Validators.minLength(5),Validators.maxLength(50)]),
      segundoNombre: new FormControl('', [Validators.required, Validators.minLength(5),Validators.maxLength(50)]),
      primerApellido: new FormControl('', [Validators.required, Validators.minLength(5),Validators.maxLength(50)]),
      segundoApellido: new FormControl('', [Validators.required, Validators.minLength(5),Validators.maxLength(50)]),
      fechaNacimiento: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]),
      documento: new FormControl('', [Validators.required, Validators.minLength(8),Validators.maxLength(8)]),
      tipoDocumento: new FormControl('', [Validators.required, Validators.minLength(1),Validators.maxLength(8)]),
      telefono: new FormControl('', [Validators.required, Validators.minLength(8),Validators.maxLength(9)]),
      direccion: new FormControl('', [Validators.required, Validators.minLength(5),Validators.maxLength(50)]),
      fechaVenceCarneSalud: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]),
      prestadorDeSalud: new FormControl('', [Validators.required, Validators.minLength(5),Validators.maxLength(50)])
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
    this.profileForm.controls['primerNombre'].setValue("");
    this.profileForm.controls['segundoNombre'].setValue("");
    this.profileForm.controls['primerApellido'].setValue("");
    this.profileForm.controls['segundoApellido'].setValue("");
    this.profileForm.controls['fechaNacimiento'].setValue("");
    this.profileForm.controls['documento'].setValue("");
    this.profileForm.controls['tipoDocumento'].setValue("");
    this.profileForm.controls['telefono'].setValue("");
    this.profileForm.controls['telefono'].setValue("");
    this.profileForm.controls['direccion'].setValue("");
    this.profileForm.controls['fechaVenceCarneSalud'].setValue("");
    this.profileForm.controls['prestadorDeSalud'].setValue("");
  }

}
