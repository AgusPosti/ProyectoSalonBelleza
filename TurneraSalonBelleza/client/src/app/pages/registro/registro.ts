import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-registro',
  standalone: true,
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {

  @Output() cerrar = new EventEmitter<void>();

  @Output() volverLogin = new EventEmitter<void>();

  cerrarRegistro() {
    this.cerrar.emit();
  }

  abrirLogin() {
    this.volverLogin.emit();
  }

}