import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RegistroComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Francisco Futbol';
}
