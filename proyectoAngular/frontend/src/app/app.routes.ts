import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Productos',
    component: HomeComponent,
  },
  {
    path: 'login',
    title: 'Inicio Sesión',
    component: LoginComponent,
  },
  {
    path: 'registro',
    title: 'Registro',
    component: RegistroComponent,
  },
];
