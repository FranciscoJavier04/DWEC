import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { DatosAltaUsuario } from '../../interfaces/datosAltaUsuario';
import { UsuarioService } from '../../services/usuario.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  registroForm: FormGroup;
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
    this.registroForm = this.fb.group(
      {
        nombre: ['', [Validators.required, Validators.minLength(3)]],
        apellidos: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmarPassword: ['', [Validators.required]],
        pais: ['', Validators.required],
        sexo: ['', Validators.required],
        aficiones: [''],
      },
      { validators: this.passwordsIguales } // Validador personalizado
    );
  }

  // Validador personalizado para comparar contraseñas
  passwordsIguales(form: AbstractControl): ValidationErrors | null {
    const password = form.get('password')?.value;
    const confirmarPassword = form.get('confirmarPassword')?.value;
    return password === confirmarPassword ? null : { passwordMismatch: true };
  }

  registrar() {
    if (this.registroForm.valid) {
      this.usuario = { ...this.registroForm.value }; // Eliminamos la confirmación antes de enviar

      this.usuarioService.anadirUsuario(this.usuario).subscribe({
        next: () => {
          // Guardar usuario en localStorage
          localStorage.setItem('usuario', JSON.stringify(this.usuario));

          alert('Usuario registrado con éxito');

          // Redirigir a la página de inicio o dashboard
          this.router.navigate(['']);
        },
        error: () => alert('Error en el registro'),
      });
    } else {
      console.log('Formulario inválido');
      this.registroForm.markAllAsTouched();
    }
  }
}
