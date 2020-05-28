import { Component } from '@angular/core';
import { ActividadesService } from './servicios/actividades.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SportClub';

  constructor(protected actServ:ActividadesService){

  }

  ngOnInit(){
    
  }


}
