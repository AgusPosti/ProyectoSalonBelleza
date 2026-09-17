import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Cliente } from './pages/cliente/cliente';
import { Admin } from './pages/admin/admin';
import { Empleado } from './pages/empleado/empleado';
import { ReservarTurno } from './pages/reservar-turno/reservar-turno';


export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'cliente', component: Cliente },
  { path: 'admin', component: Admin },
  { path: 'reservar-turno', component: ReservarTurno },
  { path: 'empleado', component: Empleado}

];