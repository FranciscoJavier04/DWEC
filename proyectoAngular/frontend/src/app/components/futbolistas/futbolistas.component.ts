import { Component, OnInit } from '@angular/core';
import { FutbolistaService } from '../../services/futbolista.service';
import { CookieService } from 'ngx-cookie-service'; // Servicio para manejar cookies
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-futbolistas',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './futbolistas.component.html',
  styleUrls: ['./futbolistas.component.css']
})
export class FutbolistasComponent implements OnInit {
  futbolistas: any[] = []; // Almacena la lista de futbolistas
  usuarioId!: number; // ID del usuario autenticado

  constructor(
    private futbolistaService: FutbolistaService,
    private cookieService: CookieService, // Servicio de cookies
    private authService: UsuarioService
  ) {}

  ngOnInit() {
    this.obtenerUsuarioId();
  }

  obtenerUsuarioId() {
    if (typeof window !== 'undefined') {
      const token = this.cookieService.get('jwt') || localStorage.getItem('jwt');

      if (token) {
        this.authService.getAuthenticatedUser().subscribe(
          (data) => {
            console.log('Datos del usuario:', data); // Ver qué datos devuelve el backend

            if (data.result === 'success') {
              this.usuarioId = data.id; // Extraer ID del usuario
              console.log('ID del usuario:', this.usuarioId);
              this.obtenerFutbolistas(); // Llamar a obtenerFutbolistas después de obtener el ID
            }
          },
          (error) => {
            console.error('Error obteniendo usuario:', error);
          }
        );
      }
    }
  }

  obtenerFutbolistas() {
    if (this.usuarioId) {
      this.futbolistaService.getFutbolistasPorUsuario(this.usuarioId).subscribe(
        (data) => {
          this.futbolistas = data;
          console.log('Futbolistas obtenidos:', this.futbolistas);
        },
        (error) => {
          console.error('Error al obtener futbolistas:', error);
        }
      );
    }
  }
}
