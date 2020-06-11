import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Persona } from '../clases/persona';
import { PersonasService } from '../servicios/personas.service';
import { PrestadorDeSalud } from '../clases/prestador-de-salud';
import { PrestadoresDeSaludService } from '../servicios/prestadores-de-salud.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  liscaPrestadoresDeSalud:PrestadorDeSalud[];

  isModalVisible:boolean = false; //se muestra o no el modal
  accionAgregar:boolean = true; //si esta en true es agregar, si esta en false es modificar

  listaPersonas:Persona[];

  titulo:string ="";


  public profileForm: FormGroup;
  constructor(protected personaService : PersonasService, protected pdsService :PrestadoresDeSaludService, protected datepipe: DatePipe) { }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      primerNombre: new FormControl('', [Validators.required, Validators.minLength(5),Validators.maxLength(50)]),
      segundoNombre: new FormControl('', [Validators.required, Validators.minLength(5),Validators.maxLength(50)]),
      primerApellido: new FormControl('', [Validators.required, Validators.minLength(5),Validators.maxLength(50)]),
      segundoApellido: new FormControl('', [Validators.required, Validators.minLength(5),Validators.maxLength(50)]),
      fechaNacimiento: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]),
      documento: new FormControl('', [Validators.required, Validators.minLength(8),Validators.maxLength(8)]),
      tipoDocumento: new FormControl('', [Validators.required, Validators.minLength(1),Validators.maxLength(8)]),
      telefono: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required, Validators.minLength(5),Validators.maxLength(50)]),
      fechaVenceCarneSalud: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]),
      prestadorDeSalud: new FormControl('', [Validators.required]),
      id: new FormControl('')
    });
    this.cargarLista();
    this.cargarPDS();
  }

  cargarLista(){
    this.personaService.getAll().subscribe(
      (persona)=>{
        this.listaPersonas=persona;
      }
    );
  }

  cerrar(){
    this.isModalVisible = false;
    this.vaciarCampos();
  }



  abrirModificar(indice:number){ 
    this.titulo="Modificar";

    this.profileForm.controls['primerNombre'].setValue(this.listaPersonas[indice].primerNombre);
    this.profileForm.controls['segundoNombre'].setValue(this.listaPersonas[indice].segundoNombre);
    this.profileForm.controls['primerApellido'].setValue(this.listaPersonas[indice].primerApellido);
    this.profileForm.controls['segundoApellido'].setValue(this.listaPersonas[indice].segundoApellido);

    let fecha = this.listaPersonas[indice].fechaNacimiento;
    fecha = this.datepipe.transform(fecha, 'yyyy-MM-dd');
    this.profileForm.controls['fechaNacimiento'].setValue(fecha);

    this.profileForm.controls['documento'].setValue(this.listaPersonas[indice].documento);
    this.profileForm.controls['tipoDocumento'].setValue(this.listaPersonas[indice].tipoDocumento);
    this.profileForm.controls['telefono'].setValue(this.listaPersonas[indice].telefono);
    this.profileForm.controls['direccion'].setValue(this.listaPersonas[indice].direccion);

    let fecha2 = this.listaPersonas[indice].fechaVenceCarneSalud;
    fecha2 = this.datepipe.transform(fecha2, 'yyyy-MM-dd');
    this.profileForm.controls['fechaVenceCarneSalud'].setValue(fecha2);

    this.profileForm.controls['prestadorDeSalud'].setValue(this.obtenerIndice(this.listaPersonas[indice].prestadorDeSalud.id));
    this.profileForm.controls['id'].setValue(this.listaPersonas[indice].id);

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

    let id = this.listaPersonas[indice].id;

    console.log("entro en borrar --------" + this.listaPersonas[indice].primerNombre);

    this.personaService.delete(id).subscribe(
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
    this.profileForm.controls['primerNombre'].setValue("");
    this.profileForm.controls['segundoNombre'].setValue("");
    this.profileForm.controls['primerApellido'].setValue("");
    this.profileForm.controls['segundoApellido'].setValue("");
    this.profileForm.controls['fechaNacimiento'].setValue("");
    this.profileForm.controls['documento'].setValue("");
    this.profileForm.controls['tipoDocumento'].setValue("");
    this.profileForm.controls['telefono'].setValue("");
    this.profileForm.controls['direccion'].setValue("");
    this.profileForm.controls['fechaVenceCarneSalud'].setValue("");
    this.profileForm.controls['prestadorDeSalud'].setValue("");
    this.profileForm.controls['id'].setValue("");
  }

  agregar(){
    let primerNombre = this.profileForm.controls['primerNombre'].value;
    let segundoNombre = this.profileForm.controls['segundoNombre'].value;
    let primerApellido = this.profileForm.controls['primerApellido'].value;
    let segundoApellido = this.profileForm.controls['segundoApellido'].value;
    let fechaNacimiento = this.profileForm.controls['fechaNacimiento'].value;
    let documento = this.profileForm.controls['documento'].value;
    let tipoDocumento = this.profileForm.controls['tipoDocumento'].value;
    let telefono = this.profileForm.controls['telefono'].value;
    let direccion = this.profileForm.controls['direccion'].value;
    let fechaVenceCarneSalud = this.profileForm.controls['fechaVenceCarneSalud'].value;
    let indicePDS = this.profileForm.controls['prestadorDeSalud'].value;

    let datos = new Persona(0, primerNombre, segundoNombre, primerApellido, segundoApellido, fechaNacimiento, documento, tipoDocumento, telefono, direccion, fechaVenceCarneSalud, this.liscaPrestadoresDeSalud[indicePDS]);

    console.log(datos);
    
    this.personaService.create(datos).subscribe(
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
    let primerNombre = this.profileForm.controls['primerNombre'].value;
    let segundoNombre = this.profileForm.controls['segundoNombre'].value;
    let primerApellido = this.profileForm.controls['primerApellido'].value;
    let segundoApellido = this.profileForm.controls['segundoApellido'].value;
    let fechaNacimiento = this.profileForm.controls['fechaNacimiento'].value;
    let documento = this.profileForm.controls['documento'].value;
    let tipoDocumento = this.profileForm.controls['tipoDocumento'].value;
    let telefono = this.profileForm.controls['telefono'].value;
    let direccion = this.profileForm.controls['direccion'].value;
    let fechaVenceCarneSalud = this.profileForm.controls['fechaVenceCarneSalud'].value;
    let indicePds = this.profileForm.controls['prestadorDeSalud'].value;
    let id = this.profileForm.controls['id'].value;

    let datos = new Persona(id, primerNombre, segundoNombre, primerApellido, segundoApellido, fechaNacimiento, documento, tipoDocumento, telefono, direccion, fechaVenceCarneSalud, this.liscaPrestadoresDeSalud[indicePds]);

    this.personaService.edit(datos).subscribe(
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

  cargarPDS(){
    this.pdsService.getAll().subscribe(
      (pds)=>{
        this.liscaPrestadoresDeSalud =pds;
      }
    );
  }
  obtenerIndice(id:number){
    for(let i=0; i < this.liscaPrestadoresDeSalud.length; i++){
      if(this.liscaPrestadoresDeSalud[i].id == id){
        return i;
      }
    }
    return -1;
  }

}
