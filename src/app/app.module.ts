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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule
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
