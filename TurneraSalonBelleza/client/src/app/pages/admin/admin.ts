import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-admin',
  styleUrl: './admin.css',
  templateUrl: './admin.html',
})
export class Admin {

  // Pestaña que se muestra actualmente
  pestanaActual = 'inicio';

  // Cambia la pestaña del menú
  cambiarPestana(pestana: string) {
    this.pestanaActual = pestana;
  }

  // Lista de profesionales
  profesionales = [
    {
      nombre: 'Andrea',
      servicios: ['Peluquería y peinados']
    },
    {
      nombre: 'Camila',
      servicios: ['Manicure y pedicure']
    },
    {
      nombre: 'Lali',
      servicios: ['Manicure y pedicure']
    },
    {
      nombre: 'Carla',
      servicios: ['Lifting de pestañas']
    },
    {
      nombre: 'Merli',
      servicios: ['Lifting de pestañas']
    },
    {
      nombre: 'Mari',
      servicios: ['Masajes']
    }
  ];

}