import { Component } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NgFor, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  usuarias: Usuario[] = [];
  errorMessage: string = '';
  constructor(private usuariaService: UsuarioService) {}
  ngOnInit(): void {
    this.obtenerUsuarias();
  }
  obtenerUsuarias(): void {
    this.usuariaService.obtenerListaEmpleados().subscribe({
      next: (data) => {
        this.usuarias = data;
      },
      error: (err) => {
        this.errorMessage = 'Error al obtener las usuarias';
        console.error(err);
      },
    });
  }
}
