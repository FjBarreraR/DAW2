import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-numero-aleatorio-componenet',
  imports: [CommonModule, FormsModule],
  templateUrl: './numero-aleatorio-componenet.html',
  styleUrl: './numero-aleatorio-componenet.css',
})
export class NumeroAleatorioComponenet {
  cantidad: number = 1;
  
  resultados: number[] = [];

  constructor() { }

  generarSerie(): void {
    this.resultados = [];

    if (this.cantidad < 1) {
      alert('Por favor, introduce una cantidad mayor a 0');
      return;
    }

    for (let i = 0; i < this.cantidad; i++) {
      const aleatorio = this.obtenerNumeroAleatorio(1, 100);
      this.resultados.push(aleatorio);
    }
  }

  private obtenerNumeroAleatorio(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
