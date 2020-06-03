import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prestadores-de-salud',
  templateUrl: './prestadores-de-salud.component.html',
  styleUrls: ['./prestadores-de-salud.component.css']
})
export class PrestadoresDeSaludComponent implements OnInit {

  isModalVisible:boolean = false; //se muestra o no el modal
  accionAgregar:boolean = true; //si esta en true es agregar, si esta en false es modificar

  titulo:string ="";

  deleteOrder() {
    console.log("deleteado---------------------");
  }

  cerrar(){
    this.isModalVisible = false;
  }

  abrirModificar(indice:number){ //indice en el array del elemento que se quiere modificar
    this.titulo="Modificar";
    //carga los datos correspondientes a esa fila
    this.accionAgregar = false;
    this.isModalVisible = true;//muestra el modal.
  }

  abrirAgregar(){
    this.titulo="Agregar";
    //muestra el modal
    this.accionAgregar = true;
    this.isModalVisible = true;
  }

  borrar(){
    //borra la fila
  }

  confirmar(){
    //borra la fila
    if(this.accionAgregar){
      //agregar
    }else{
      //modificar
    }
    this.cerrar();//cierra el modal
  }

  constructor() { }

  ngOnInit(): void {
  }

}
