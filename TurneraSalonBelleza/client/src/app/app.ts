import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Servicio {
  id: number;
  nombre: string;
  categoria: string;
  profesionales: number;
  icono: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  titulo = 'Salón de Belleza';
  servicioSeleccionado: Servicio | null = null;

  servicios: Servicio[] = [
    { id: 1, nombre: 'Lifting y Maquillaje', categoria: 'Estética Facial', profesionales: 2, icono: '✨' },
    { id: 2, nombre: 'Manicure y Pedicure', categoria: 'Uñas', profesionales: 2, icono: '💅' },
    { id: 3, nombre: 'Peluquería y Peinados', categoria: 'Cabello', profesionales: 1, icono: '✂️' },
    { id: 4, nombre: 'Masajes', categoria: 'Bienestar', profesionales: 1, icono: '💆‍♀️' }
  ];

  // La función tiene que estar ACÁ ADENTRO de la clase App
  seleccionarServicio(servicio: Servicio) {
    this.servicioSeleccionado = servicio;
  }

  volver() {
    this.servicioSeleccionado = null;
  }
}