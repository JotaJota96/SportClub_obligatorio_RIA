import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// componentes de acceso publico
import { HomeComponent }                from './acceso-publico/home/home.component';
import { QuienesSomosComponent }        from './acceso-publico/quienes-somos/quienes-somos.component';
import { LogInComponent }               from './acceso-publico/log-in/log-in.component';
import { RegistrarseComponent }         from './acceso-publico/registrarse/registrarse.component';
import { NuestrasActividadesComponent } from './acceso-publico/nuestras-actividades/nuestras-actividades.component';
import { ContactosComponent }           from './acceso-publico/contactos/contactos.component';


//Componentes de administracion
import { AdministracionComponent }     from './administracion/administracion.component';
import { ActividadesComponent }        from './administracion/actividades/actividades.component';
import { AccountComponent }            from './administracion/account/account.component';
import { CategoriasComponent }         from './administracion/categorias/categorias.component';
import { MediosDePagoComponent }       from './administracion/medios-de-pago/medios-de-pago.component';
import { PersonasComponent }           from './administracion/personas/personas.component';
import { PreciosComponent }            from './administracion/precios/precios.component';
import { PrestadoresDeSaludComponent } from './administracion/prestadores-de-salud/prestadores-de-salud.component';
import { ConveniosComponent }          from './administracion/convenios/convenios.component';
import { NoticiasComponent }           from './administracion/noticias/noticias.component';
import { ConratosComponent }           from './administracion/conratos/conratos.component';

const routes: Routes = [
  // Componentes publicos ----------------------------------------------
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
  // Componentes relacionados a administracion ------------------------
  {
    path:'administracion',
    component:AdministracionComponent
  },
  {
    path:'administracion/account',
    component:AccountComponent
  },
  {
    path:'administracion/actividadesa',
    component:ActividadesComponent
  },
  {
    path:'administracion/categorias',
    component:CategoriasComponent
  },
  {
    path:'administracion/conratos',
    component:ConratosComponent
  },
  {
    path:'administracion/convenios',
    component:ConveniosComponent
  },
  {
    path:'administracion/mediosDePago',
    component:MediosDePagoComponent
  },
  {
    path:'administracion/noticias',
    component:NoticiasComponent
  },
  {
    path:'administracion/personas',
    component:PersonasComponent
  },
  {
    path:'administracion/precios',
    component:PreciosComponent
  },
  {
    path:'administracion/prestadoresDeSalud',
    component:PrestadoresDeSaludComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
