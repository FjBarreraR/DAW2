import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio1.html',
  styleUrl: './ejercicio1.css',
})
export class Ejercicio1 {
  @Input() nombre: string = '';

  saludar(){
    alert(`¡Hola, ${this.nombre}!`);
  }
}
