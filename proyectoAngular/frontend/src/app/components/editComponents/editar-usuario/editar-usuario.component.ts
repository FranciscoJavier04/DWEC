import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-usuario',
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  usuarioForm!: FormGroup;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Obtener ID de la URL
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    // Inicializar formulario
    this.usuarioForm = this.fb.group({
      nombre: [''],
      apellidos: [''],
      email: [''],
      password: [''],
      sexo: [''],
      pais: [''],
      aficiones: [''],
      admin: [0]
    });

    // Cargar datos del usuario en el formulario
    this.usuarioService.obtenerUsuario(this.id).subscribe((data) => {
      this.usuarioForm.patchValue(data);
    });
  }

  // Método para enviar los cambios
  guardarCambios(): void {
    this.usuarioService.editarUsuario(this.id, this.usuarioForm.value).subscribe(() => {
      alert('Usuario actualizado con éxito');
      this.router.navigate(['/backend']);
    });
  }
}
