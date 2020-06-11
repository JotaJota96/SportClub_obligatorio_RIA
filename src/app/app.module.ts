import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { InterceptorTokenService } from './interceptores/interceptor-token.service';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

// Servicios
import { AccountService }            from './servicios/account.service';
import { ActividadesService }        from './servicios/actividades.service';
import { CategoriasService }         from './servicios/categorias.service';
import { ConveniosService }          from './servicios/convenios.service';
import { MediosDePagoService }       from './servicios/medios-de-pago.service';
import { PersonasService }           from './servicios/personas.service';
import { PreciosService }            from './servicios/precios.service';
import { PrestadoresDeSaludService } from './servicios/prestadores-de-salud.service';

// componentes de acceso publico
import { HeaderComponent }              from './headerYfooter/header/header.component';
import { FooterComponent }              from './headerYfooter/footer/footer.component';
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

// Pipes
import { EstadoPipe } from './pipes/estado.pipe';
import { StrPreciosPipe } from './pipes/str-precios.pipe';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ActividadesComponent,
    HomeComponent,
    QuienesSomosComponent,
    LogInComponent,
    RegistrarseComponent,
    NuestrasActividadesComponent,
    ContactosComponent,
    AccountComponent,
    CategoriasComponent,
    MediosDePagoComponent,
    PersonasComponent,
    PreciosComponent,
    PrestadoresDeSaludComponent,
    ConveniosComponent,
    AdministracionComponent,
    EstadoPipe,
    StrPreciosPipe,
    ConratosComponent,
    NoticiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    AccountService,
    ActividadesService,
    CategoriasService,
    ConveniosService,
    MediosDePagoService,
    PersonasService,
    PreciosService,
    PrestadoresDeSaludService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorTokenService,
      multi: true
    },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
