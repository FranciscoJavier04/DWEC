import { Component, OnInit } from '@angular/core';
import { PosicioneService } from '../../../services/posicione.service';
import { FutbolistaService } from '../../../services/futbolista.service';
import { Posiciones } from '../../../interfaces/posiciones';
import { Futbolista } from '../../../interfaces/futbolista';
import { CommonModule, NgFor } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-insert-posicion-asignada',
  imports: [NgFor, CommonModule, RouterModule,FormsModule],
  templateUrl: './insert-posicion-asignada.component.html',
  styleUrls: ['./insert-posicion-asignada.component.css']
})
export class InsertPosicionAsignadaComponent implements OnInit {
  futbolistaId: number = 1;
  posicionId: number = 1;
  respuesta: string = 'Esperando respuesta...'; // Valor por defecto
  futbolistas: Futbolista[] = [];
  posiciones2: Posiciones[] = [];

  constructor(
    private futbolistaService: PosicioneService,
    private futbolistaS: FutbolistaService,
    private router: Router

  ) {}

  agregarPosicion() {
    this.futbolistaService.agregarPosicion(this.futbolistaId, this.posicionId)
      .subscribe({
        next: (response) => {
          this.respuesta = response.agregado === 'ok' ? 'Posición asignada correctamente.' : 'Error al agregar la posición.';
          this.router.navigate(['/misFutbolistas']);

                      // Escuchar el evento de navegación para saber cuándo terminó
                      this.router.events.pipe(
                        filter(event => event instanceof NavigationEnd)
                      ).subscribe(() => {
                        window.location.reload(); // Recargar la página después de la navegación
                      });
        },
        error: (err) => {
          console.error(err);
          this.respuesta = 'Hubo un error al intentar agregar la posición.';
        }
      });
  }

  ngOnInit(): void {
    this.futbolistaS.getFutbolista().subscribe(
      (data) => {
        this.futbolistas = data; // Asignamos los datos de futbolistas
      },
      (error) => {
        console.error('Error al obtener los futbolistas', error);
      }
    );
    this.futbolistaService.getPosiciones().subscribe(
      (data) => {
        this.posiciones2 = data;
      },
      (error) => {
        console.error('Error al obtener las posiciones', error);
      }
    );
  }

}
