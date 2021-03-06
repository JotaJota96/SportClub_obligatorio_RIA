import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Actividad } from '../../clases/actividad';
import { ActividadesService } from '../../servicios/actividades.service';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/servicios/account.service';
import { AlertsComponent } from '../alerts/alerts.component';
@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {
  @ViewChild('alertMsj') alertMsj:AlertsComponent = new AlertsComponent();

  isModalVisible:boolean = false; //se muestra o no el modal
  accionAgregar:boolean = true; //si esta en true es agregar, si esta en false es modificar
  lstActividades:Actividad[];
  titulo:string ="";

  public profileForm: FormGroup;

  constructor(protected actServ:ActividadesService,
              protected accServ:AccountService,
              protected router:Router) {
    
  }

  ngOnInit(): void {
    this.verificarPermisos();
    
    this.profileForm = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(2),Validators.maxLength(50)]),
      activo: new FormControl(false),
      id: new FormControl('')
    });
    this.cargarLista();
  }

  private verificarPermisos():void{
    if ( ! this.accServ.isSecretary()){
      this.router.navigate(['/administracion']);
    }
  }

  cargarLista(){
    this.actServ.getAll().subscribe(
      (lst)=>{
        this.lstActividades = lst;
      }
    );
  }

  cerrar(){
    this.isModalVisible = false;
    this.vaciarCampos();
  }

  abrirModificar(indice:number){ //indice en el array del elemento que se quiere modificar
    this.titulo="Modificar";
    this.profileForm.controls['nombre'].setValue(this.lstActividades[indice].nombre);
    this.profileForm.controls['activo'].setValue(this.lstActividades[indice].activo);
    this.profileForm.controls['id'].setValue(this.lstActividades[indice].id);
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
        let id = this.lstActividades[indice].id;
        this.actServ.delete(id).subscribe(
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

  vaciarCampos(){
    this.profileForm.controls['nombre'].setValue("");
    this.profileForm.controls['activo'].setValue(false);
    this.profileForm.controls['id'].setValue("");
  }

  agregar(){
    let nombre = this.profileForm.controls['nombre'].value;
    let estado = this.profileForm.controls['activo'].value;

    let datos = new Actividad(0, nombre, estado);
    this.actServ.create(datos).subscribe(
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
    let nombre = this.profileForm.controls['nombre'].value;
    let estado = this.profileForm.controls['activo'].value;
    let id = this.profileForm.controls['id'].value;
    let datos = new Actividad(id, nombre, estado);
    this.actServ.edit(datos).subscribe(
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
}
