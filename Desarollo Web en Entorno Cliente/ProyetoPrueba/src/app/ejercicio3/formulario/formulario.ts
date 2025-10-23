import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  operandoA: any = '';
  operandoB: any = '';

  operador: any = '';

  @Output() resultadoFinal = new EventEmitter<any>();

  operar() {
    
    if (this.operador === 'suma'){
      this.resultadoFinal.emit(Number(this.operandoA) + Number(this.operandoB));
    } else if (this.operador === 'resta'){
      this.resultadoFinal.emit(Number(this.operandoA) - Number(this.operandoB));
    } else if (this.operador === 'multiplicacion'){
      this.resultadoFinal.emit(Number(this.operandoA) * Number(this.operandoB));
    } else if (this.operador === 'division'){
      this.resultadoFinal.emit(Number(this.operandoA) / Number(this.operandoB));
    } else if (this.operador === 'raiz_cuadrada'){
      this.resultadoFinal.emit(Math.sqrt(Number(this.operandoA)));
    }
  };
}
