import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FutbolistaService } from '../../../services/futbolista.service';
import { Router } from '@angular/router';
import { ClubService } from '../../../services/club.service';
import { UsuarioService } from '../../../services/usuario.service';
import { Club } from '../../../interfaces/clubs';
import { Usuario } from '../../../interfaces/usuario';


@Component({
  selector: 'app-insert-futbolista',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './insert-futbolista.component.html',
  styleUrl: './insert-futbolista.component.css'
})
export class InsertFutbolistaComponent {
  insertarFutbolistaForm: FormGroup;
  clubs: Club[] = [];
  usuarios: Usuario[] = [];

  constructor(
    private fb: FormBuilder,
    private futbolistaService: FutbolistaService,
    private clubService: ClubService,
    private usuarioService: UsuarioService,
    private router: Router
  ) {
    // Inicializamos el formulario sin validaciones
    this.insertarFutbolistaForm = this.fb.group({
      edad: [null],
      fechaNac: [null],
      nacionalidad: [''],
      nombre: [''],
      imagen: [''],
      club: [null],
      usuario: ['']
    });
  }

  insertarFutbolista(): void {
    // Obtener los datos del formulario
    const futbolista: any = this.insertarFutbolistaForm.value;

    console.log('Datos del formulario:', futbolista);

    // Subir la imagen si es necesario, aqui estamos asumiendo que se subira en el backend
    if (this.insertarFutbolistaForm.valid) {
      this.futbolistaService.anadirFutbolista(futbolista).subscribe(
        (response) => {
          alert('Futbolista insertado con éxito: ' + response);
          // Redirigir a otra página luego de la inserción exitosa
          this.router.navigate(['/backend']);
        },
        (error) => {
          console.error('Error al insertar el futbolista:', error);
        }
      );
    }
  }
  ngOnInit(): void {
    this.clubService.getClubs().subscribe(
      (data) => {
        this.clubs = data;
      },
      (error) => {
        console.error('Error al obtener los clubes', error);
      }
    );

    this.usuarioService.obtenerUsuarios().subscribe(
      (data) => {
        this.usuarios = data;
      },
      (error) => {
        console.error('Error al obtener los usuarios', error);
      }
    );
  }

}
