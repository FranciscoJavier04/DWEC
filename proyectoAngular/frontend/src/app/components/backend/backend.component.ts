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

@Component({
  selector: 'app-backend',
  imports: [NgFor, CommonModule],
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

}
