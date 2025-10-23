import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resutado',
  imports: [],
  templateUrl: './resutado.html',
  styleUrl: './resutado.css',
})
export class Resutado {
  @Input() result!: any;
}
