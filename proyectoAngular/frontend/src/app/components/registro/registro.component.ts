import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { DatosAltaUsuario } from '../../interfaces/datosInsert/datosAltaUsuario';
import { UsuarioService } from '../../services/usuario.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { DatosAutenticaUsuario } from '../../interfaces/datosAutenticaUsuario';
import { filter } from 'rxjs/operators';


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

  registrar() {
    if (this.registroForm.valid) {
      const formValue = this.registroForm.value;

      // Convertir array de aficiones a string separado por comas
      const aficionesString = formValue.aficiones.join(', ');

      this.usuario = {
        ...formValue,
        aficiones: aficionesString, // Guardamos aficiones como string
      };
      const datosUsuario: DatosAutenticaUsuario = {
        email:formValue.email,
        password: formValue.password,
      };

      this.usuarioService.anadirUsuario(this.usuario).subscribe({
        next: () => {
          alert('Usuario registrado con éxito');
          this.usuarioService.login(datosUsuario).subscribe({
            next: (response) => {
              if (response.result === 'Succes') {
                localStorage.setItem('jwt', response.jwt);
                this.router.navigate(['']);
                this.router.events.pipe(
                              filter(event => event instanceof NavigationEnd)
                            ).subscribe(() => {
                              window.location.reload(); // Recargar la página después de la navegación
                            });;
              }
            },
            error: (err) => console.error('Error en login:', err),
          });

        },
        error: () => alert('Error en el registro'),
      });
    } else {
      console.log('Formulario inválido');
      this.registroForm.markAllAsTouched();
    }
  }
}
