import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { UsuarioService } from '../../../services/usuario.service';
import { DatosAltaUsuario } from '../../../interfaces/datosInsert/datosAltaUsuario';

@Component({
  selector: 'app-insert-user',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './insert-user.component.html',
  styleUrl: './insert-user.component.css',
})
export class InsertUserComponent {
  insertUserForm: FormGroup;
  usuario: DatosAltaUsuario = {
    nombre: '',
    apellidos: '',
    email: '',
    password: '',
    pais: '',
    sexo: '',
    aficiones: '',
    admin: 0,
  };

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) {
    this.insertUserForm = this.fb.group(
      {
        nombre: ['', [Validators.required, Validators.minLength(3)]],
        apellidos: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmarPassword: ['', [Validators.required]],
        pais: ['', Validators.required],
        sexo: ['', Validators.required],
        aficiones: [[]], // Se inicializa como un array vacío
      },
      { validators: this.passwordsIguales }
    );
  }

  // Validador personalizado para comparar contraseñas
  passwordsIguales(form: AbstractControl): ValidationErrors | null {
    const password = form.get('password')?.value;
    const confirmarPassword = form.get('confirmarPassword')?.value;
    return password === confirmarPassword ? null : { passwordMismatch: true };
  }

  insertarUser() {
    if (this.insertUserForm.valid) {
      const formValue = this.insertUserForm.value;

      // Convertir array de aficiones a string separado por comas
      const aficionesString = formValue.aficiones.join(', ');

      this.usuario = {
        ...formValue,
        aficiones: aficionesString, // Guardamos aficiones como string
      };

      this.usuarioService.anadirUsuario(this.usuario).subscribe({
        next: () => {
          alert('Usuario insertado con éxito');
          this.router.navigate(['/backend']);
        },
        error: () => alert('Error en el insertUser'),
      });
    } else {
      console.log('Formulario inválido');
      this.insertUserForm.markAllAsTouched();
    }
  }
}
