import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {}
  onSubmit(): void {
    if (!this.email || !this.password) {
      this.errorMessage = 'El email y el password son necesarios';
      return;
    }

    this.usuarioService.login(this.email, this.password).subscribe(
      response => {
        if (response && response.result === 'ok') {
          localStorage.setItem('jwt', response.jwt);  // Guardar el token en localStorage
          this.router.navigate(['/backend']);
        } else {
          this.errorMessage = 'Login failed. Please check your credentials';
        }
      },
      error => {
        this.errorMessage = 'An error occurred. Please try again later';
      }
    );
  }
  getUserData(): void {
    this.usuarioService.getAuthenticatedUser().subscribe(
      response => {
        if (response && response.result === 'ok') {
          localStorage.setItem('user', JSON.stringify(response)); // Guardar datos del usuario
        }
      },
      error => {
        console.error('Error obteniendo datos del usuario');
      }
    );
  }



}
