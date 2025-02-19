import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { DatosAltaUsuario } from '../../interfaces/datosAltaUsuario';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms'; // Asegúrate de importar NgForm

@Component({
  selector: 'app-registro',
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'], // Corregí esto a styleUrls (plural)
})
export class RegistroComponent {
  usuario: DatosAltaUsuario = {
    admin: 0,
    aficiones: '',
    apellidos: '',
    email: '',
    nombre: '',
    pais: '',
    password: '',
    sexo: '',
  };

  constructor(private usuarioService: UsuarioService) {}

  onSubmit(form: NgForm) {
    // Cambié el tipo de 'form' a NgForm
    if (form.valid) {
      // Llamamos al servicio para añadir el usuario
      this.usuarioService.anadirUsuario(this.usuario).subscribe({
        next: () => {
          console.log('Usuario añadido correctamente');
          form.resetForm(); // Opcional: reseteamos el formulario después de éxito
        },
        error: (error) => {
          console.error('Error al añadir el usuario', error);
          alert(
            'Hubo un problema al registrar el usuario. Inténtalo de nuevo.'
          ); // Notificar al usuario de forma amigable
        },
      });
    } else {
      console.log('Formulario inválido');
      alert('Por favor, completa todos los campos correctamente.'); // Notificar si el formulario no es válido
    }
  }
}
