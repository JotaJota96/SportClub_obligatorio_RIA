import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Noticia } from '../clases/noticia';
import { NoticiasService } from '../servicios/noticias.service';

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

  constructor(protected notiServ:NoticiasService) {

  }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      id: new FormControl(''),
      titulo: new FormControl('', [Validators.required, Validators.minLength(2),Validators.maxLength(50)]),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(2),Validators.maxLength(2000)]),
      imagen: new FormControl('', [Validators.required]),
      fechaCaducidad: new FormControl('', [Validators.required])
    });
    this.cargarLista();
  }

  cargarLista(){
    this.notiServ.getAll().subscribe(
      (lst)=>{
        this.lstNoticias = lst;
      }
    );
  }

  cerrar(){
    this.isModalVisible = false;
    this.vaciarCampos();
  }

  abrirModificar(indice:number){ //indice en el array del elemento que se quiere modificar
    this.titulo="Modificar";

    this.profileForm.controls['id'].setValue(this.lstNoticias[indice].id);
    this.profileForm.controls['titulo'].setValue(this.lstNoticias[indice].titulo);
    this.profileForm.controls['descripcion'].setValue(this.lstNoticias[indice].descripcion);
    this.profileForm.controls['imagen'].setValue(this.lstNoticias[indice].imagen);
    this.profileForm.controls['fechaCaducidad'].setValue(this.lstNoticias[indice].fechaCaducidad);

    console.log(indice);
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
    let id = this.lstNoticias[indice].id;
    this.notiServ.delete(id).subscribe(
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

  agregar(){
    let titulo = this.profileForm.controls['titulo'].value;
    let descripcion = this.profileForm.controls['descripcion'].value;
    let imagen = this.profileForm.controls['imagen'].value;
    let fechaCaducidad = this.profileForm.controls['fechaCaducidad'].value;

    let datos = new Noticia(0, titulo, descripcion, imagen, fechaCaducidad);
    this.notiServ.create(datos).subscribe(
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
    let id = this.profileForm.controls['id'].value;
    let titulo = this.profileForm.controls['titulo'].value;
    let descripcion = this.profileForm.controls['descripcion'].value;
    let imagen = this.profileForm.controls['imagen'].value;
    let fechaCaducidad = this.profileForm.controls['fechaCaducidad'].value;

    let datos = new Noticia(id, titulo, descripcion, imagen, fechaCaducidad);
    this.notiServ.edit(datos).subscribe(
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

  vaciarCampos(){
    this.profileForm.controls['id'].setValue("");
    this.profileForm.controls['titulo'].setValue("");
    this.profileForm.controls['descripcion'].setValue("");
    this.profileForm.controls['imagen'].setValue(" ");
    this.profileForm.controls['fechaCaducidad'].setValue("");
  }

}




