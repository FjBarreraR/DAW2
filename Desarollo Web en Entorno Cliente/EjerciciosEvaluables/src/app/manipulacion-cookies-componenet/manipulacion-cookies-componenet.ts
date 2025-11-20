import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manipulacion-cookies-componenet',
  imports: [CommonModule, FormsModule],
  templateUrl: './manipulacion-cookies-componenet.html',
  styleUrl: './manipulacion-cookies-componenet.css',
})
export class ManipulacionCookiesComponenet {
nombreUsuario: string | null = null; // Si es null, no hay usuario logueado
  nombreInput: string = ''; // Variable temporal para el input

  private readonly COOKIE_NAME = 'usuario_angular_demo';

  constructor() { }

  ngOnInit(): void {
    // Al iniciar, intentamos recuperar la cookie
    this.checkCookie();
  }

  // --- Lógica de la Vista ---

  guardarUsuario(): void {
    if (this.nombreInput.trim()) {
      // Guardamos la cookie por 1 día
      this.setCookie(this.COOKIE_NAME, this.nombreInput, 1);
      // Actualizamos la vista
      this.nombreUsuario = this.nombreInput;
    }
  }

  borrarUsuario(): void {
    this.deleteCookie(this.COOKIE_NAME);
    this.nombreUsuario = null;
    this.nombreInput = '';
  }

  // --- Lógica Interna de Cookies (Helpers) ---

  private checkCookie(): void {
    const user = this.getCookie(this.COOKIE_NAME);
    if (user !== '') {
      this.nombreUsuario = user;
    }
  }

  /**
   * Crea una cookie.
   * @param cname Nombre de la cookie
   * @param cvalue Valor de la cookie
   * @param exdays Días para expirar
   */
  private setCookie(cname: string, cvalue: string, exdays: number): void {
    const d = new Date();
    // Multiplicamos: días * 24h * 60m * 60s * 1000ms
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    
    const expires = 'expires=' + d.toUTCString();
    
    // document.cookie espera un string con formato específico
    // path=/ asegura que la cookie esté disponible en todo el sitio
    document.cookie = `${cname}=${cvalue};${expires};path=/`;
  }

  /**
   * Busca una cookie por su nombre y devuelve su valor.
   */
  private getCookie(cname: string): string {
    const name = cname + '=';
    // Decodificamos por si tiene caracteres especiales
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      // Quitamos espacios en blanco al principio si los hay
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      // Si encontramos la cookie, devolvemos el valor (lo que va después del =)
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

  /**
   * Para borrar, establecemos la fecha de expiración en el pasado (ej. 1970)
   */
  private deleteCookie(cname: string): void {
    document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
}
