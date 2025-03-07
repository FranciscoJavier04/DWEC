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
export class InsertClubComponent {
  insertarClubForm: FormGroup;
  imagenPreview: string | null = null;

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



  insertarClub(): void {
    // Obtener los datos del formulario
    const club: DatosAltaClub = this.insertarClubForm.value;

    // Subir la imagen si es necesario, aquí estamos asumiendo que se subirá en el backend
    if (this.insertarClubForm.valid) {
      this.clubService.anadirClub(club).subscribe(
        (response) => {
          alert('Club insertado con éxito');
          // Redirigir a otra página después de la inserción exitosa
          this.router.navigate(['/backend']);
        },
        (error) => {
          console.error('Error al insertar el club:', error);
        }
      );
    }
  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagenPreview = reader.result as string;
        this.insertarClubForm.patchValue({
          imagen: this.imagenPreview.split(',')[1] || '',
        });
      };
      reader.readAsDataURL(file);
    }
  }
}
