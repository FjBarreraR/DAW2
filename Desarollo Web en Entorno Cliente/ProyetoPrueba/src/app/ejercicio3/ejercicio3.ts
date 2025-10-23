import { Component } from '@angular/core';
import { Formulario } from './formulario/formulario';
import { Resutado } from './resultado/resutado';

@Component({
  selector: 'app-ejercicio3',
  imports: [Formulario, Resutado],
  templateUrl: './ejercicio3.html',
  styleUrl: './ejercicio3.css',
})
export class Ejercicio3 {
  resultado: any = '';

  establecerValor(resultado: any){
    this.resultado = resultado;
  };
}
