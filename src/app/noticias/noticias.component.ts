import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Noticia } from '../clases/noticia';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  isModalVisible:boolean = false; //se muestra o no el modal
  accionAgregar:boolean = true; //si esta en true es agregar, si esta en false es modificar
  titulo:string ="";
  lstNoticias:Noticia[];
  public profileForm: FormGroup;

  constructor() {

  }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      id: new FormControl(''),
      titulo: new FormControl('', [Validators.required, Validators.minLength(2),Validators.maxLength(50)]),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(2),Validators.maxLength(1000)]),
      imagen: new FormControl('', [Validators.required]),
      fechaCaducidad: new FormControl('', [Validators.required])
    });
  }

  cargarLista(){
    /*
    this.convServ.getAll().subscribe(
      (mdp)=>{
        this.lstConvenios=mdp;
      }
    );
    */
  }

  cerrar(){
    this.isModalVisible = false;
    this.vaciarCampos();
  }

  abrirModificar(indice:number){ //indice en el array del elemento que se quiere modificar
    this.titulo="Modificar";

    this.accionAgregar = false;
    this.isModalVisible = true;//muestra el modal.
  }

  abrirAgregar(){
    this.vaciarCampos();
    this.titulo="Agregar";//determina el titulo del modal
    this.accionAgregar = true;//determina que el modal es de agregar
    this.isModalVisible = true;//abre el modal
  }

  borrar(indice:number){

  }

  confirmar(){
    //borra la fila
    if(this.accionAgregar){
      this.agregar();
    }else{
      this.modificar();
    }
    this.cerrar();//cierra el modal
  }

  agregar(){

  }

  modificar(){

  }

  vaciarCampos(){
    this.profileForm.controls['id'].setValue("");
    this.profileForm.controls['titulo'].setValue("");
    this.profileForm.controls['descripcion'].setValue("");
    this.profileForm.controls['imagen'].setValue("");
    this.profileForm.controls['fechaCaducidad'].setValue("");
  }

}




