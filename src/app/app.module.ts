import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AccountService } from './servicios/account.service';
import { ActividadesService } from './servicios/actividades.service';
import { CategoriasService } from './servicios/categorias.service';
import { ConveniosService } from './servicios/convenios.service';
import { MediosDePagoService } from './servicios/medios-de-pago.service';
import { PersonasService } from './servicios/personas.service';
import { PreciosService } from './servicios/precios.service';
import { PrestadoresDeSaludService } from './servicios/prestadores-de-salud.service';
import { WeatherForecastService } from './servicios/weather-forecast.service';
import { InterceptorTokenService } from './interceptores/interceptor-token.service';
import { HeaderComponent } from './headerYfooter/header/header.component';
import { FooterComponent } from './headerYfooter/footer/footer.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { HomeComponent } from './home/home.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { NuestrasActividadesComponent } from './nuestras-actividades/nuestras-actividades.component';
import { ContactosComponent } from './contactos/contactos.component';
import { AccountComponent } from './account/account.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { MediosDePagoComponent } from './medios-de-pago/medios-de-pago.component';
import { PersonasComponent } from './personas/personas.component';
import { PreciosComponent } from './precios/precios.component';
import { PrestadoresDeSaludComponent } from './prestadores-de-salud/prestadores-de-salud.component';
import { ConveniosComponent } from './convenios/convenios.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AdministracionComponent } from './administracion/administracion.component';

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
    AdministracionComponent
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
    WeatherForecastService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorTokenService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
