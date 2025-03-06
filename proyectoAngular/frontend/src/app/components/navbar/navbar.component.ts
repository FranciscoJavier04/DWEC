import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../services/usuario.service';
@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  usuario: any = null; // Inicializa como null
  esAdmin: boolean = false;

  constructor(private router: Router, private authService: UsuarioService) {}

  ngOnInit() {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('jwt')) {
        this.authService.getAuthenticatedUser().subscribe(
          (data) => {
            if (data.result === 'success') {
              this.usuario = data;
              this.esAdmin = this.usuario.admin;
            }
          },
          (error) => {
            console.error('Error obteniendo usuario', error);
          }
        );
      }
    }
  }


  cerrarSesion() {
    // Eliminar usuario de localStorage y recargar la página
    localStorage.removeItem('jwt');
    this.usuario = null; // Restablecer estado del usuario
    window.location.reload();
    //this.router.navigate(['/home']);
  }
}
