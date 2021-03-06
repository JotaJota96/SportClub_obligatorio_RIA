import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Precio } from '../../clases/precio';
import { PreciosService } from '../../servicios/precios.service';
import { CategoriasService } from '../../servicios/categorias.service';
import { Categoria } from '../../clases/categoria';
import { DatePipe } from '@angular/common';
import { AccountService } from 'src/app/servicios/account.service';
import { Router } from '@angular/router';
import { AlertsComponent } from '../alerts/alerts.component';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.css']
})
export class PreciosComponent implements OnInit {
  @ViewChild('alertMsj') alertMsj:AlertsComponent = new AlertsComponent();

  liscaCateg:Categoria[];
  isModalVisible:boolean = false; //se muestra o no el modal
  accionAgregar:boolean = true; //si esta en true es agregar, si esta en false es modificar

  listaPrecios:Precio[];

  titulo:string ="";

  public profileForm: FormGroup;

  constructor(protected precioService : PreciosService, 
              protected catService : CategoriasService, 
              protected datepipe: DatePipe,
              protected accServ:AccountService, 
              private router:Router) {

  }

  ngOnInit(): void {
    this.verificarPermisos();
    
    this.profileForm = new FormGroup({
      valor: new FormControl('', [Validators.required, Validators.minLength(1),Validators.maxLength(10)]),
      fechaVigencia: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]),
      categoria: new FormControl(''),
      id: new FormControl('')
    });
    this.cargarLista();
    this.cargarCategoria();
  }

  private verificarPermisos():void{
    if ( ! this.accServ.isSecretary()){
      this.router.navigate(['/administracion']);
    }
  }

  cargarLista(){
    this.precioService.getAll().subscribe(
      (pre)=>{
        this.listaPrecios=pre;
      }
    );
  }

  cerrar(){
    this.isModalVisible = false;
    this.vaciarCampos();
  }

  abrirModificar(indice:number){ //indice en el array del elemento que se quiere modificar
    this.titulo="Modificar";
    this.profileForm.controls['valor'].setValue(this.listaPrecios[indice].valor);

    let fecha2 = this.listaPrecios[indice].fechaVigencia;
    fecha2 = this.datepipe.transform(fecha2, 'yyyy-MM-dd');
    this.profileForm.controls['fechaVigencia'].setValue(fecha2);

    this.profileForm.controls['categoria'].setValue(this.obtenerIndice(this.listaPrecios[indice].categoria.id));
    this.profileForm.controls['id'].setValue(this.listaPrecios[indice].id);
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
        let id = this.listaPrecios[indice].id;
        this.precioService.delete(id).subscribe(
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
    this.profileForm.controls['valor'].setValue("");
    this.profileForm.controls['fechaVigencia'].setValue("");
    this.profileForm.controls['categoria'].setValue("");
    this.profileForm.controls['id'].setValue("");
  }

  agregar(){
    let valor = this.profileForm.controls['valor'].value;
    let fechaVigencia = this.profileForm.controls['fechaVigencia'].value;
    let indiceCat = this.profileForm.controls['categoria'].value;
    let datos = new Precio(0, valor, fechaVigencia, this.liscaCateg[indiceCat]);

    this.precioService.create(datos).subscribe(
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
    let valor = this.profileForm.controls['valor'].value;
    let fechaVigencia = this.profileForm.controls['fechaVigencia'].value;
    let indiceCat = this.profileForm.controls['categoria'].value;
    let id = this.profileForm.controls['id'].value;
    let datos = new Precio(id, valor, fechaVigencia, this.liscaCateg[indiceCat]);
    this.precioService.edit(datos).subscribe(
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

  cargarCategoria(){
    this.catService.getAll().subscribe(
      (cats)=>{
        this.liscaCateg =cats;
      }
    );
  }

  obtenerIndice(id:number){
    for(let i=0; i < this.liscaCateg.length; i++){
      if(this.liscaCateg[i].id == id){
        return i;
      }
    }
    return -1;
  }

}
