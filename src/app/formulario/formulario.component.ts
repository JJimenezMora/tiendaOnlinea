import { Component, OnInit } from '@angular/core';
import { Formulario } from '../model/formulario.model';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  model = new Formulario ( );
  
  constructor() { }

  ngOnInit() {
  }
 get currentFormulario(){
   return JSON.stringify(this.model);
 }
}
