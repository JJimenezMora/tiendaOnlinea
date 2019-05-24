import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infopagina } from '../interface/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: infopagina = {};
  cargando = false;
  equipo: any[] = []; // array para el abuot.componet.html


  // Constructor
  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }
// Se hace una peticion de un opjeto JSON local
  private cargarInfo() {
    console.log('servicios listo para usar');
    this.http.get('assets/datos/datos-paginas.json')
      .subscribe((resp: infopagina) => {

        this.cargando = true;
        this.info = resp;
      });
  }

//  Se hace una peticion a base de datotos en linea
//  a una base de datos firebase
  private cargarEquipo() {
    this.http.get('https://fba-proyet.firebaseio.com/equipo.json')
      .subscribe((resp: any[]) => {

        this.equipo = resp;
        // console.log(this.equipo);
      });
  }
}
