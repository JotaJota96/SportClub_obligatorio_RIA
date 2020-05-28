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

  constructor(protected acountServ:AccountService){

  }

  ngOnInit(){
    let datos = new LoginDTO('jjap96@gmail.com', '1234');
    this.acountServ.login(datos).subscribe(
      (data) =>{
        console.log("OK");
        console.log(data);
      },
      (err) =>{
        console.log("Error");
        console.log(err);
      }
    );
  }


}
