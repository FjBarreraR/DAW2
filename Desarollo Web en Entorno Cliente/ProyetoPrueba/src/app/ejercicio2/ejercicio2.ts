import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio2',
  imports: [],
  templateUrl: './ejercicio2.html',
  styleUrl: './ejercicio2.css',
})
export class Ejercicio2 {
  tareas: string[] = [
    'Aprender Angular',
    'Desarrollar una App',
    'Aprende TypeScript'
  ];

  agregarTarea(nuevaTarea:string):void{
    this.tareas.push(nuevaTarea);
  }
}
