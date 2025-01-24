import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioComponent } from './componentes/formulario/formulario.component';

@Component({
  selector: 'app-root',
  standalone: true, // Declarar que es un componente independiente
  imports: [RouterOutlet, FormularioComponent], // Importar otros componentes
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corregir el nombre de esta propiedad
})
export class AppComponent {
  title = 'ejercicio1';
}
