import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FechaHoraComponenet } from "./fecha-hora-componenet/fecha-hora-componenet";
import { NumeroAleatorioComponenet } from "./numero-aleatorio-componenet/numero-aleatorio-componenet";
import { NavgacionHistorialComponenet } from "./navgacion-historial-componenet/navgacion-historial-componenet";
import { InteraccionVentanaHijaComponenet } from "./interaccion-ventana-hija-componenet/interaccion-ventana-hija-componenet";
import { ManipulacionCookiesComponenet } from "./manipulacion-cookies-componenet/manipulacion-cookies-componenet";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FechaHoraComponenet, NumeroAleatorioComponenet, NavgacionHistorialComponenet, InteraccionVentanaHijaComponenet, ManipulacionCookiesComponenet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('EjerciciosEvaluables');
}
