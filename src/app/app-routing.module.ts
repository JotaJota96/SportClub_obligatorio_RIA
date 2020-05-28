import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActividadesComponent } from './actividades/actividades.component';
import { HomeComponent } from './home/home.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { NuestrasActividadesComponent } from './nuestras-actividades/nuestras-actividades.component';
import { ContactosComponent } from './contactos/contactos.component';
import { AccountComponent } from './account/account.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ConveniosComponent } from './convenios/convenios.component';
import { MediosDePagoComponent } from './medios-de-pago/medios-de-pago.component';
import { PersonasComponent } from './personas/personas.component';
import { PreciosComponent } from './precios/precios.component';
import { PrestadoresDeSaludComponent } from './prestadores-de-salud/prestadores-de-salud.component';


const routes: Routes = [
  {
    path:'actividadesa',
    component:ActividadesComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'quienesSomos',
    component:QuienesSomosComponent
  },
  {
    path:'logIn',
    component:LogInComponent
  },
  {
    path:'registrarse',
    component:RegistrarseComponent
  },
  {
    path:'nuestrasActividades',
    component:NuestrasActividadesComponent
  },
  {
    path:'contactos',
    component:ContactosComponent
  },
  {
    path:'account',
    component:AccountComponent
  },
  {
    path:'categorias',
    component:CategoriasComponent
  },
  {
    path:'convenios',
    component:ConveniosComponent
  },
  {
    path:'mediosDePago',
    component:MediosDePagoComponent
  },
  {
    path:'personas',
    component:PersonasComponent
  },
  {
    path:'precios',
    component:PreciosComponent
  },
  {
    path:'prestadoresDeSalud',
    component:PrestadoresDeSaludComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
