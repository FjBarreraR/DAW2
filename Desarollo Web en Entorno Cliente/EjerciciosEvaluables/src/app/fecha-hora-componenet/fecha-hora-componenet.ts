import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fecha-hora-componenet',
  imports: [CommonModule],
  templateUrl: './fecha-hora-componenet.html',
  styleUrl: './fecha-hora-componenet.css',
})
export class FechaHoraComponenet {
  fechaActual: Date = new Date();
  private intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.fechaActual = new Date();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
