
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-reservar-turno',
  styleUrl: './reservar-turno.css',
  templateUrl: './reservar-turno.html',
})
export class ReservarTurno {

  // Indica en qué paso estamos
  pasoActual = 1;

  // Guarda el servicio que eligió el usuario
  servicioSeleccionado = '';

  // Guarda la profesional elegida
  profesionalSeleccionada = '';

  fechaSeleccionada = '';

  horarioSeleccionado = '';

  // Lista de profesionales y los servicios que pueden realizar
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

  // Guarda el servicio elegido
  seleccionarServicio(servicio: string) {
    this.servicioSeleccionado = servicio;
  }

  // Devuelve solamente las profesionales que pueden hacer el servicio
  obtenerProfesionales() {
    return this.profesionales.filter(profesional =>
      profesional.servicios.includes(this.servicioSeleccionado)
    );
  }

  // Guarda la profesional elegida
  seleccionarProfesional(profesional: string) {
    this.profesionalSeleccionada = profesional;
  }

  // Guarda la fecha elegida
  seleccionarFecha(fecha: string) {
    this.fechaSeleccionada = fecha;
  }

  // Guarda el horario elegido
  seleccionarHorario(horario: string) {
    this.horarioSeleccionado = horario;
  }

  // Ir al siguiente paso
  siguientePaso() {

  // En el paso 1 tiene que elegir un servicio
  if (this.pasoActual === 1 && !this.servicioSeleccionado) {
    return;
  }

  // En el paso 2 tiene que elegir una profesional
  if (this.pasoActual === 2 && !this.profesionalSeleccionada) {
    return;
  }

  // Si todo está elegido, pasa al siguiente paso
  if (this.pasoActual < 4) {
    this.pasoActual++;
  }
}

  // Volver al paso anterior
  anteriorPaso() {
    if (this.pasoActual > 1) {
      this.pasoActual--;
    }
  }

}

