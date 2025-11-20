import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-interaccion-ventana-hija-componenet',
  imports: [CommonModule],
  templateUrl: './interaccion-ventana-hija-componenet.html',
  styleUrl: './interaccion-ventana-hija-componenet.css',
})
export class InteraccionVentanaHijaComponenet {
  private refVentana: Window | null = null;

  abrirVentana(): void {
    if (this.refVentana && !this.refVentana.closed) {
      this.refVentana.focus();
      return;
    }

    this.refVentana = window.open(
      '', 
      '_blank', 
      'width=400,height=400,left=200,top=200'
    );

    if (!this.refVentana) {
      alert('El navegador bloqueó la ventana emergente. Por favor, permítela.');
    }
  }

  mover(deltaX: number, deltaY: number): void {
    if (this.ventanaEstaAbierta()) {
      this.refVentana!.moveBy(deltaX, deltaY);
    } else {
      alert('La ventana no está abierta.');
    }
  }

  cerrarVentana(): void {
    if (this.ventanaEstaAbierta()) {
      this.refVentana!.close();
      this.refVentana = null;
    }
  }

  ventanaEstaAbierta(): boolean {
    return this.refVentana !== null && !this.refVentana.closed;
  }
}
