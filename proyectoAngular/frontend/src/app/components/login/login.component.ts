import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { CommonModule } from '@angular/common';

import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

// 📌 Importaciones de Angular Material

import { DatosAutenticaUsuario } from '../../interfaces/datosAutenticaUsuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    ReactiveFormsModule,

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const datosUsuario: DatosAutenticaUsuario = this.loginForm.value;

      this.authService.login(datosUsuario).subscribe({
        next: (response) => {
          if (response.result === 'Succes') {
            localStorage.setItem('jwt', response.jwt);
            this.router.navigate(['/clubs']);

            // Escuchar el evento de navegación para saber cuándo terminó
            this.router.events.pipe(
              filter(event => event instanceof NavigationEnd)
            ).subscribe(() => {
              window.location.reload(); // Recargar la página después de la navegación
            });
          }
        },
        error: (err) => console.error('Error en login:', err),
      });
    }
  }
}
