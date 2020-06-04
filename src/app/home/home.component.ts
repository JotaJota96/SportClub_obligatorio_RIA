import { Component, OnInit } from '@angular/core';
import { Noticia } from '../clases/noticia';
import { NoticiasService } from '../servicios/noticias.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // noticias que se van a mostrar
  noticias:Noticia[];

  constructor(protected notiServ:NoticiasService) {

  }

  ngOnInit(): void {
    this.notiServ.getActivas().subscribe(
      (lista) => {
        this.noticias = lista;
      }
    );
  }
}
