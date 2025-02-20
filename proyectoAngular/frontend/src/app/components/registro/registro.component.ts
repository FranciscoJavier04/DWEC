import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DatosAltaUsuario } from '../../interfaces/datosAltaUsuario';
import { UsuarioService } from '../../services/usuario.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService) {
    this.registroForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellidos: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      pais: ['', Validators.required],
      sexo: ['', Validators.required],
      aficiones: [''],
    });
  }

  registrar() {
    if (this.registroForm.valid) {
      // Asignar los valores del formulario al objeto usuario
      this.usuario = { ...this.registroForm.value };

      // Llamar al servicio para agregar el usuario
      this.usuarioService.anadirUsuario(this.usuario).subscribe({
        next: () => alert('Usuario registrado con éxito'),
        error: () => alert('Error en el registro'),
      });
    } else {
      console.log('Formulario inválido');
      this.registroForm.markAllAsTouched();
    }
  }
}
