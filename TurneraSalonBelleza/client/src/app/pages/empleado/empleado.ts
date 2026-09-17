import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empleado.html',
  styleUrl: './empleado.css'
})
export class Empleado {

  // Pestaña que se muestra actualmente
  pestanaActual = 'inicio';

  // Cambia la pestaña del menú
  cambiarPestana(pestana: string) {
    this.pestanaActual = pestana;
  }

  // Datos del empleado
  empleado = {
    nombre: 'Andrea',
    especialidad: 'Peluquería y Peinados'
  };

  // Turnos del empleado
  turnos = [
    {
      hora: '10:00',
      cliente: 'Sofía Martínez',
      servicio: 'Peluquería y Peinados'
    },
    {
      hora: '11:30',
      cliente: 'Valentina López',
      servicio: 'Corte y Peinado'
    },
    {
      hora: '15:00',
      cliente: 'Camila Rodríguez',
      servicio: 'Peinado'
    },
    {
      hora: '17:30',
      cliente: 'Julieta Fernández',
      servicio: 'Peluquería y Peinados'
    }
  ];

  // Servicios que realiza el empleado
  servicios = [
    'Peluquería y Peinados',
    'Corte de cabello',
    'Peinados'
  ];

}