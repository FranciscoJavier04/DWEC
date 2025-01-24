import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre: string = '';
  edad: string = '';
  correo: string = '';
  mensajeBienvenida: string = '';

  enviarFormulario() {
    this.mensajeBienvenida = `¡Bienvenido/a, ${this.nombre}!`;
  }

  camposCompletos(): boolean {
    return this.nombre.trim() !== '' && this.edad.trim() !== '' && this.correo.trim() !== '';
  }
}
