import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Club } from '../../interfaces/clubs';
import { ClubService } from '../../services/club.service';
import { Futbolista } from '../../interfaces/futbolista';
import { FutbolistaService } from '../../services/futbolista.service';
import { PosicionesAsignadas } from '../../interfaces/posiciones_asignadas';
import { PosicioneService } from '../../services/posicione.service';
import { Posiciones } from '../../interfaces/posiciones';
import { Usuario } from '../../interfaces/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-backend',
  imports: [NgFor, CommonModule, Router],
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css'], // Cambio aquí
})
export class BackendComponent implements OnInit {
  clubs: Club[] = [];
  futbolistas: Futbolista[] = [];
  posiciones: PosicionesAsignadas[] = [];
  posiciones2: Posiciones[] = [];
  usuario: Usuario[] = [];
  futbolistaAEliminarId: number | null = null;

  constructor(
    private clubService: ClubService,
    private futbolistaService: FutbolistaService,
    private posicionesService: PosicioneService,
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clubService.getClubs().subscribe(
      (data) => {
        this.clubs = data;
      },
      (error) => {
        console.error('Error al obtener los clubes', error);
      }
    );

    this.futbolistaService.getFutbolista().subscribe(
      (data) => {
        this.futbolistas = data;
      },
      (error) => {
        console.error('Error al obtener los futbolistas', error);
      }
    );

    this.posicionesService.getPosicionesAsignadas().subscribe(
      (data) => {
        this.posiciones = data;
      },
      (error) => {
        console.error('Error al obtener las posiciones', error);
      }
    );
    this.posicionesService.getPosiciones().subscribe(
      (data) => {
        this.posiciones2 = data;
      },
      (error) => {
        console.error('Error al obtener las posiciones', error);
      }
    );

    this.usuarioService.obtenerUsuarios().subscribe(
      (data) => {
        this.usuario = data;
      },
      (error) => {
        console.error('Error al obtener los usuarios', error);
      }
    );
  }

  eliminarFutbolista(id: number): void {
    this.futbolistaService.deleteFutbolista(id).subscribe(
      (response) => {
        if (response.borrado === 'ok') {
          console.log('Futbolista eliminado con éxito');
          this.futbolistas = this.futbolistas.filter((f) => f.id !== id); // Elimina el futbolista del array local
        } else {
          console.log('Error al eliminar futbolista');
        }
      },
      (error) => {
        console.error('Error al intentar eliminar futbolista', error);
      }
    );
  }
  eliminarClub(id: number): void {
    this.clubService.deleteClub(id).subscribe(
      (response) => {
        if (response.borrado === 'ok') {
          console.log('Club eliminado con éxito');
          this.clubs = this.clubs.filter((c) => c.id !== id); // Elimina el club del array local
        } else {
          console.log('Error al eliminar club');
        }
      },
      (error) => {
        console.error('Error al intentar eliminar club', error);
      }
    );
  }

  eliminarPosicionAsignada(id: number): void {
    this.posicionesService.deletePosicionAsignada(id).subscribe(
      (response) => {
        if (response.borrado === 'ok') {
          console.log('Posición asignada eliminada con éxito');
          this.posiciones = this.posiciones.filter((p) => p.id !== id); // Elimina la posición asignada del array local
        } else {
          console.log('Error al eliminar posición asignada');
        }
      },
      (error) => {
        console.error('Error al intentar eliminar posición asignada', error);
      }
    );
  }

  eliminarPosicion(id: number): void {
    this.posicionesService.deletePosiciones(id).subscribe(
      (response) => {
        if (response.borrado === 'ok') {
          console.log('Posición eliminada con éxito');
          this.posiciones2 = this.posiciones2.filter((p) => p.id !== id); // Elimina la posición del array local
        } else {
          console.log('Error al eliminar posición');
        }
      },
      (error) => {
        console.error('Error al intentar eliminar posición', error);
      }
    );
  }

  eliminarUsuario(id: number): void {
    this.usuarioService.deleteUsuario(id).subscribe(
      (response) => {
        if (response.borrado === 'ok') {
          console.log('Usuario eliminado con éxito');
          this.usuario = this.usuario.filter((u) => u.id !== id); // Elimina el usuario del array local
        } else {
          console.log('Error al eliminar usuario');
        }
      },
      (error) => {
        console.error('Error al intentar eliminar usuario', error);
      }
    );
  }

  editarUsuario(id: number): void {
    this.router.navigate(['/editar', id]);
  }
}
