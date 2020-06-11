import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountService } from '../../servicios/account.service';
import { LoginDTO } from '../../clases/login-dto';
import {Router} from "@angular/router";
import { AlertsComponent } from 'src/app/administracion/alerts/alerts.component';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  @ViewChild('alertMsj') alertMsj:AlertsComponent = new AlertsComponent();

  public loginForm: FormGroup;
  constructor(protected accServ:AccountService, private router: Router) {

   }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  vaciarCampos(){
    this.loginForm.controls['email'].setValue("");
    this.loginForm.controls['password'].setValue("");
  }
  login(){
    let correo = this.loginForm.controls['email'].value;
    let contrasenia = this.loginForm.controls['password'].value;
    let datosLogin = new LoginDTO(correo, contrasenia);
    this.accServ.login(datosLogin).subscribe(
      (retorno)=>{
        //hacer algo si login es correcto
        this.router.navigate(['/administracion']);
      },
      (error)=>{
        //datos incorrectos
        this.alertMsj.mostrar("danger", "No se ha podido iniciar sesión", 4);
      }
    );
  }
}
