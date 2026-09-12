import { Component } from '@angular/core';
import { Inicio } from './pages/inicio/inicio';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Inicio],
  template: '<app-inicio></app-inicio>'
})
export class App {}