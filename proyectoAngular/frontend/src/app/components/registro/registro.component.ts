import { Component } from '@angular/core';
import { DatosAltaUsuario } from '../../interfaces/datosAltaUsuario';
import { UsuarioService } from '../../services/usuario.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
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

  constructor(private usuarioService: UsuarioService) {}

  registrar() {
    this.usuarioService.anadirUsuario(this.usuario).subscribe({
      next: () => alert('Usuario registrado con éxito'),
      error: () => alert('Error en el registro'),
    });
  }
}
