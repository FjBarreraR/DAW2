import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navgacion-historial-componenet',
  imports: [],
  standalone: true,
  templateUrl: './navgacion-historial-componenet.html',
  styleUrl: './navgacion-historial-componenet.css',
})
export class NavgacionHistorialComponenet {
  // 2. Inyectamos el servicio en el constructor
  constructor(private location: Location) { }

  // Método para ir a la página anterior
  irAtras(): void {
    this.location.back();
  }

  // Método para ir a la página siguiente (si existe en el historial)
  irAdelante(): void {
    this.location.forward();
  }

  // Método para recargar la página actual
  recargarPagina(): void {
    window.location.reload();
  }
}
