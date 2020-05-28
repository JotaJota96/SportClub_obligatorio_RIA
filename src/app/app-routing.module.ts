import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActividadesComponent } from './actividades/actividades.component';
import { HomeComponent } from './home/home.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { NuestrasActividadesComponent } from './nuestras-actividades/nuestras-actividades.component';
import { ContactosComponent } from './contactos/contactos.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
