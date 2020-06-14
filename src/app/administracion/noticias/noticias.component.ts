import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Noticia } from '../../clases/noticia';
import { NoticiasService } from '../../servicios/noticias.service';
import { DatePipe } from '@angular/common';
import { AccountService } from 'src/app/servicios/account.service';
import { Router } from '@angular/router';
import { AlertsComponent } from '../alerts/alerts.component';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  @ViewChild('alertMsj') alertMsj:AlertsComponent = new AlertsComponent();

  isModalVisible:boolean = false; //se muestra o no el modal
  accionAgregar:boolean = true; //si esta en true es agregar, si esta en false es modificar
  titulo:string ="";
  lstNoticias:Noticia[];
  public profileForm: FormGroup;
  imagenVistaPrevia:String ="";

  constructor(protected notiServ:NoticiasService, 
              protected datepipe: DatePipe,
              protected accServ:AccountService, 
              private router:Router) {
  }

  ngOnInit(): void {
    this.verificarPermisos();

    this.profileForm = new FormGroup({
      id: new FormControl(''),
      titulo: new FormControl('', [Validators.required, Validators.minLength(2),Validators.maxLength(50)]),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(2),Validators.maxLength(2000)]),
      imagen: new FormControl('', [Validators.required]),
      fechaCaducidad: new FormControl('', [Validators.required])
    });
    this.cargarLista();
  }

  private verificarPermisos():void{
    if ( ! this.accServ.isAdmin()){
      this.router.navigate(['/administracion']);
    }
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
    
    let fecha:String = this.lstNoticias[indice].fechaCaducidad;
    fecha = this.datepipe.transform(fecha, 'yyyy-MM-dd');
    this.profileForm.controls['fechaCaducidad'].setValue(fecha);

    // cargo la imagen para mostrar
    this.imagenVistaPrevia = this.profileForm.controls['imagen'].value;

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
    this.alertMsj.solicitarConfirmacion("¿Seguro que desea eliminar?", 
      ()=>{
        let id = this.lstNoticias[indice].id;
        this.notiServ.delete(id).subscribe(
          (retorno)=>{
            //hacer algo si login es correcto
            this.alertMsj.mostrar("success", "Se ha eliminado exitosamente", 4);
            this.cargarLista();
          },
          (error)=>{
            this.alertMsj.mostrar("danger", "Ha ocurrido un error durante la eliminacion", 4);
          }
        );
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
        this.alertMsj.mostrar("success", "Se ha agregado exitosamente", 4);
        this.cargarLista();
      },
      (error)=>{
        this.alertMsj.mostrar("danger", "Ha ocurrido un error durante el agregado", 4);
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
        this.alertMsj.mostrar("success", "Se ha modificado exitosamente", 4);
        this.cargarLista();
      },
      (error)=>{
        this.alertMsj.mostrar("danger", "Ha ocurrido un error durante la modificacion", 4);
      }
    );
  }

  vaciarCampos(){
    this.imagenVistaPrevia = "";
    this.profileForm.controls['id'].setValue("");
    this.profileForm.controls['titulo'].setValue("");
    this.profileForm.controls['descripcion'].setValue("");
    this.profileForm.controls['imagen'].setValue("");
    this.profileForm.controls['fechaCaducidad'].setValue("");
    this.restablecerAImagenPorDefecto();
  }

  // ***** Funciones para cargar y convertir imagen ********************************
  // extraido de: https://stackoverflow.com/questions/42482951/converting-an-image-to-base64-in-angular-2
  // esta funcion se llama al cargar un archivo
  alCargarImagen(evt: any) {
    const archivo = evt.target.files[0];
    
    // Si realmente se cargo un archivo
    if (archivo) {
      const lector = new FileReader();
      
      lector.onload = this.obtenerStringImagen.bind(this);
      lector.readAsBinaryString(archivo);
      // OJO que el string con la imagen demora unos milisegundos en cargarse
    }else{
      // aca no se como hacer que entre, pero por las dudas le pongo esto...
      this.profileForm.controls['imagen'].setValue("");
      this.restablecerAImagenPorDefecto();
    }
  }
  obtenerStringImagen(e) {
    let strImg = "data:image/png;base64," + btoa(e.target.result);
    this.profileForm.controls['imagen'].setValue(strImg);
    this.imagenVistaPrevia = this.profileForm.controls['imagen'].value;
  }
  // ***** Fin de Funciones para cargar y convertir imagen *************************

  private restablecerAImagenPorDefecto() {
    this.imagenVistaPrevia = "/assets/images/default-image.png";
  }


}




