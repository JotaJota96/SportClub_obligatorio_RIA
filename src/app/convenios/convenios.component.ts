import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Convenio } from '../clases/convenio';
import { ConveniosService } from '../servicios/convenios.service';

@Component({
  selector: 'app-convenios',
  templateUrl: './convenios.component.html',
  styleUrls: ['./convenios.component.css']
})
export class ConveniosComponent implements OnInit {
  isModalVisible:boolean = false; //se muestra o no el modal
  accionAgregar:boolean = true; //si esta en true es agregar, si esta en false es modificar
  lstConvenios:Convenio[];
  titulo:string ="";

  public profileForm: FormGroup;
  constructor(protected convServ:ConveniosService) {

  }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(2),Validators.maxLength(50)]),
      porcentajeDeDescuento: new FormControl('', [Validators.required, Validators.minLength(1),Validators.maxLength(8)]),
      activo: new FormControl(false),
      id: new FormControl('')
    });
    this.cargarLista();
  }

  cargarLista(){
    this.convServ.getAll().subscribe(
      (mdp)=>{
        this.lstConvenios=mdp;
      }
    );
  }

  cerrar(){
    this.isModalVisible = false;
    this.vaciarCampos();
  }

  abrirModificar(indice:number){ //indice en el array del elemento que se quiere modificar
    this.titulo="Modificar";
    this.profileForm.controls['nombre'].setValue(this.lstConvenios[indice].nombre);
    this.profileForm.controls['activo'].setValue(this.lstConvenios[indice].activo);
    this.profileForm.controls['porcentajeDeDescuento'].setValue(this.lstConvenios[indice].porcentajeDescuento);
    this.profileForm.controls['id'].setValue(this.lstConvenios[indice].id);
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
    let id = this.lstConvenios[indice].id;
    this.convServ.delete(id).subscribe(
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
    let nombre = this.profileForm.controls['nombre'].value;
    let estado = this.profileForm.controls['activo'].value;
    let porcentajeDeDescuento = this.profileForm.controls['porcentajeDeDescuento'].value;

    let datos = new Convenio(0, nombre, porcentajeDeDescuento, estado);
    this.convServ.create(datos).subscribe(
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
    let porcentajeDeDescuento = this.profileForm.controls['porcentajeDeDescuento'].value;
    let id = this.profileForm.controls['id'].value;


    let datos = new Convenio(id, nombre, porcentajeDeDescuento, estado);
    this.convServ.edit(datos).subscribe(
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

  vaciarCampos(){
    this.profileForm.controls['nombre'].setValue("");
    this.profileForm.controls['porcentajeDeDescuento'].setValue("");
    this.profileForm.controls['activo'].setValue(false);
    this.profileForm.controls['id'].setValue("");
  }

}
