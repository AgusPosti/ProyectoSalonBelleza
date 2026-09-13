import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  @Input() abierto = false;

  @Output() cerrar = new EventEmitter<void>();

  @Output() registrar = new EventEmitter<void>();

  cerrarLogin() {
    this.cerrar.emit();
  }

  abrirRegistro() {
  this.registrar.emit();
}

}