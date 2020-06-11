import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Categoria } from '../../clases/categoria';
import { CategoriasService } from '../../servicios/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})

export class CategoriasComponent implements OnInit {
  isModalVisible:boolean = false; //se muestra o no el modal
  accionAgregar:boolean = true; //si esta en true es agregar, si esta en false es modificar

  listaCategorias:Categoria[];
  titulo:string ="";

  public profileForm: FormGroup;

  constructor(protected catService:CategoriasService) { }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(2),Validators.maxLength(50)]),
      activo: new FormControl(false),
      id: new FormControl('')
    });
    this.cargarLista();
  }

  cargarLista(){
    this.catService.getAll().subscribe(
      (cat)=>{
        this.listaCategorias=cat;
      }
    );
  }

  cerrar(){
    this.isModalVisible = false;
    this.vaciarCampos();
  }

  abrirModificar(indice:number){ //indice en el array del elemento que se quiere modificar
    this.titulo="Modificar";
    this.profileForm.controls['nombre'].setValue(this.listaCategorias[indice].nombre);
    this.profileForm.controls['activo'].setValue(this.listaCategorias[indice].activo);
    this.profileForm.controls['id'].setValue(this.listaCategorias[indice].id);
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
    let id = this.listaCategorias[indice].id;
    this.catService.delete(id).subscribe(
      (retorno)=>{
        //hacer algo si login es correcto
        alert("Se ha eliminado exitosamente");
        this.cargarLista();
      },
      (error)=>{
        alert("Ha ocurrido un error durante la eliminacion");
      }
    );
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

  vaciarCampos(){
    this.profileForm.controls['nombre'].setValue("");
    this.profileForm.controls['activo'].setValue(false);
    this.profileForm.controls['id'].setValue("");
  }

  agregar(){
    let nombre = this.profileForm.controls['nombre'].value;
    let estado = this.profileForm.controls['activo'].value;
    let datos = new Categoria(0, nombre, estado, []);
    this.catService.create(datos).subscribe(
      (retorno)=>{
        //hacer algo si login es correcto
        alert("Se ha agregado exitosamente");
        this.cargarLista();
      },
      (error)=>{
        alert("Ha ocurrido un error durante el agregado");
      }
    );
  }

  modificar(){
    let nombre = this.profileForm.controls['nombre'].value;
    let estado = this.profileForm.controls['activo'].value;
    let id = this.profileForm.controls['id'].value;

    let datos = new Categoria(id, nombre, estado, []);
    this.catService.edit(datos).subscribe(
      (retorno)=>{
        //hacer algo si login es correcto
        alert("Se ha modificado exitosamente");
        this.cargarLista();
      },
      (error)=>{
        alert("Ha ocurrido un error durante la modificacion");
      }
    );
  }

}
