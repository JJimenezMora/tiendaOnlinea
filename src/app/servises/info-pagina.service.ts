import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infopagina } from '../interface/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: infopagina = {};
  cargando = false;

  constructor(private http: HttpClient) {
    console.log('servicios listo para usar');
    this.http.get('assets/datos/datos-paginas.json')
      .subscribe((resp: infopagina) => {


        this.cargando = true;
        this.info = resp;

        console.log(resp);
      });
  }
}
