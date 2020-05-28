import { Component } from '@angular/core';
import { AccountService } from './servicios/account.service';
import { LoginDTO } from './clases/login-dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SportClub';

  constructor(protected acServ:AccountService){

  }

  ngOnInit(){

  }


}
