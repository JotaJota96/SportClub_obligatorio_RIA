import { Component, OnInit, ViewChild } from '@angular/core';
import { Persona } from '../../clases/persona';
import { Convenio } from '../../clases/convenio';
import { Categoria } from '../../clases/categoria';
import { MedioDePago } from '../../clases/medio-de-pago';
import { ContratosService } from '../../servicios/contratos.service';
import { PersonasService } from '../../servicios/personas.service';
import { ConveniosService } from '../../servicios/convenios.service';
import { CategoriasService } from '../../servicios/categorias.service';
import { MediosDePagoService } from '../../servicios/medios-de-pago.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contrato } from '../../clases/contrato';
import { DatePipe } from '@angular/common';
import { ContratoDTO } from '../../clases/contrato-dto';
import { AccountService } from 'src/app/servicios/account.service';
import { Router } from '@angular/router';
import { AlertsComponent } from '../alerts/alerts.component';

@Component({
  selector: 'app-conratos',
  templateUrl: './conratos.component.html',
  styleUrls: ['./conratos.component.css']
})
export class ConratosComponent implements OnInit {
  @ViewChild('alertMsj') alertMsj:AlertsComponent = new AlertsComponent();

  isModalVisible:boolean = false; //se muestra o no el modal
  accionAgregar:boolean = true; //si esta en true es agregar, si esta en false es modificar
  titulo:string ="";
  public profileForm: FormGroup;

  listaContratos:Contrato[];

  liscaPersonas:Persona[];
  listaConvenios:Convenio[];
  listaCategoria: Categoria[];
  listaMedioDePago:MedioDePago[];

  constructor(protected contratoService: ContratosService,
              protected personaService : PersonasService,
              protected convenioService: ConveniosService,
              protected categoriaService: CategoriasService,
              protected mdpService:MediosDePagoService,
              protected datepipe: DatePipe,
              protected accServ:AccountService, 
              private router:Router){

  }

  ngOnInit(): void {
    this.verificarPermisos();
    
    this.profileForm = new FormGroup({
      fechaHoraGenerado: new FormControl('', [Validators.required]),
      usuarioGenero: new FormControl('', [Validators.required]),
      fechaComienzo: new FormControl('', [Validators.required]),
      socio: new FormControl('', [Validators.required]),
      convenio: new FormControl('', [Validators.required]),
      categoria: new FormControl('', [Validators.required]),
      medioDePago: new FormControl('', [Validators.required]),
      activo: new FormControl('', [Validators.required]),
      id: new FormControl('')
    });
    this.cargarLista();
    this.cargarPersonas();
    this.cargarConvenio();
    this.cargarCategoria();
    this.cargarMedioDePago();

  }

  private verificarPermisos():void{
    if ( ! this.accServ.isSecretary()){
      this.router.navigate(['/administracion']);
    }
  }
  cargarLista(){
    this.contratoService.getAll().subscribe(
      (cont)=>{
        this.listaContratos=cont;
      }
    );
  }

  cerrar(){
    this.isModalVisible = false;
    this.vaciarCampos();
  }

  abrirModificar(indice:number){ //indice en el array del elemento que se quiere modificar
    this.titulo="Modificar";

    let fhg = this.listaContratos[indice].fechaHoraGenerado;
    fhg = this.datepipe.transform(fhg, 'yyyy-MM-dd');
    this.profileForm.controls['fechaHoraGenerado'].setValue(fhg);

    this.profileForm.controls['usuarioGenero'].setValue(this.listaContratos[indice].usuarioGenero);

    let fhg2 = this.listaContratos[indice].fechaComienzo;
    fhg2 = this.datepipe.transform(fhg2, 'yyyy-MM-dd');
    this.profileForm.controls['fechaComienzo'].setValue(fhg2);

    this.profileForm.controls['socio'].setValue(this.obtenerIndicePersonas(this.listaContratos[indice].socio.id));
    this.profileForm.controls['convenio'].setValue(this.obtenerIndiceConvenios(this.listaContratos[indice].convenio.id));
    this.profileForm.controls['categoria'].setValue(this.obtenerIndiceCategoria(this.listaContratos[indice].categoria.id));
    this.profileForm.controls['medioDePago'].setValue(this.obtenerIndiceMedioDePago(this.listaContratos[indice].medioDePago.id));

    this.profileForm.controls['activo'].setValue(this.listaContratos[indice].activo);
    this.profileForm.controls['id'].setValue(this.listaContratos[indice].id);

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
    let id = this.listaContratos[indice].id;
    this.contratoService.delete(id).subscribe(
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

    this.profileForm.controls['fechaHoraGenerado'].setValue("");
    this.profileForm.controls['usuarioGenero'].setValue("");
    this.profileForm.controls['fechaComienzo'].setValue("");
    this.profileForm.controls['socio'].setValue("");
    this.profileForm.controls['convenio'].setValue("");
    this.profileForm.controls['categoria'].setValue("");
    this.profileForm.controls['medioDePago'].setValue("");
    this.profileForm.controls['activo'].setValue("");
    this.profileForm.controls['id'].setValue("");

  }

  agregar(){
    let fechaHoraGenerado = this.profileForm.controls['fechaHoraGenerado'].value;
    let usuarioGenero = this.profileForm.controls['usuarioGenero'].value;
    let fechaComienzo = this.profileForm.controls['fechaComienzo'].value;

    let indexSocio = this.profileForm.controls['socio'].value;
    let indexConvenio = this.profileForm.controls['convenio'].value;
    let indexCategoria = this.profileForm.controls['categoria'].value;
    let indexMedioDePago = this.profileForm.controls['medioDePago'].value;

    let activo = this.profileForm.controls['activo'].value;

    let datos = new ContratoDTO(  0,
                                  usuarioGenero,
                                  fechaComienzo,  
                                  this.liscaPersonas[indexSocio].id,
                                  this.listaConvenios[indexConvenio].id,
                                  this.listaCategoria[indexCategoria].id,
                                  this.listaMedioDePago[indexMedioDePago].id,
                                  activo);

    this.contratoService.create(datos).subscribe(
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
    let fechaHoraGenerado = this.profileForm.controls['fechaHoraGenerado'].value;
    let usuarioGenero = this.profileForm.controls['usuarioGenero'].value;
    let fechaComienzo = this.profileForm.controls['fechaComienzo'].value;

    let indexSocio = this.profileForm.controls['socio'].value;
    let indexConvenio = this.profileForm.controls['convenio'].value;
    let indexCategoria = this.profileForm.controls['categoria'].value;
    let indexMedioDePago = this.profileForm.controls['medioDePago'].value;

    let activo = this.profileForm.controls['activo'].value;
    let id = this.profileForm.controls['id'].value;

    let datos = new ContratoDTO(  id,
                                  usuarioGenero,
                                  fechaComienzo,  
                                  this.liscaPersonas[indexSocio].id,
                                  this.listaConvenios[indexConvenio].id,
                                  this.listaCategoria[indexCategoria].id,
                                  this.listaMedioDePago[indexMedioDePago].id,
                                  activo);

    this.contratoService.edit(datos).subscribe(
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

  cargarPersonas(){
    this.personaService.getAll().subscribe(
      (cats)=>{
        this.liscaPersonas =cats;
      }
    );
  }

  cargarConvenio(){
    this.convenioService.getAll().subscribe(
      (cats)=>{
        this.listaConvenios =cats;
      }
    );
  }

  cargarCategoria(){
    this.categoriaService.getAll().subscribe(
      (cats)=>{
        this.listaCategoria =cats;
      }
    );
  }

  cargarMedioDePago(){
    this.mdpService.getAll().subscribe(
      (cats)=>{
        this.listaMedioDePago =cats;
      }
    );
  }




  obtenerIndicePersonas(id:number){
    for(let i=0; i < this.liscaPersonas.length; i++){
      if(this.liscaPersonas[i].id == id){
        return i;
      }
    }
    return -1;
  }

  obtenerIndiceConvenios(id:number){
    for(let i=0; i < this.listaConvenios.length; i++){
      if(this.listaConvenios[i].id == id){
        return i;
      }
    }
    return -1;
  }

  obtenerIndiceCategoria(id:number){
    for(let i=0; i < this.listaCategoria.length; i++){
      if(this.listaCategoria[i].id == id){
        return i;
      }
    }
    return -1;
  }

  obtenerIndiceMedioDePago(id:number){
    for(let i=0; i < this.listaMedioDePago.length; i++){
      if(this.listaMedioDePago[i].id == id){
        return i;
      }
    }
    return -1;
  }

}
