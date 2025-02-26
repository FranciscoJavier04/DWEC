import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { DatosAltaClub } from '../../../interfaces/datosInsert/datosAltaClub';
import { ClubService } from '../../../services/club.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-club',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './insert-club.component.html',
  styleUrls: ['./insert-club.component.css'],
})
export class InsertClubComponent implements OnInit {
  insertarClubForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clubService: ClubService,
    private router: Router
  ) {
    // Aquí inicializamos el formulario en el constructor
    this.insertarClubForm = this.fb.group({
      nombre: [''],
      estadio: [''],
      fundacion: [null],
      pais: [''],
      imagen: [''],
    });
  }

  ngOnInit(): void {
    // Si necesitas inicializar algo más en ngOnInit, puedes hacerlo aquí
  }

  insertarClub(): void {
    // Obtener los datos del formulario
    const club: DatosAltaClub = this.insertarClubForm.value;

    // Subir la imagen si es necesario, aquí estamos asumiendo que se subirá en el backend
    if (this.insertarClubForm.valid) {
      this.clubService.anadirClub(club).subscribe(
        (response) => {
          console.log('Club insertado con éxito:', response);
          // Redirigir a otra página después de la inserción exitosa
          this.router.navigate(['/backend']);
        },
        (error) => {
          console.error('Error al insertar el club:', error);
        }
      );
    }
  }
}
