import { Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { ClubComponent } from './components/club/club.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'registro',
    title: 'Registro',
    component: RegistroComponent,
  },
  {
    path: 'clubs',
    title: 'Clubs',
    component: ClubComponent,
  },
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent,
  },
  {
    path: 'backend',
    title: 'Backend',
    component: ClubComponent,
  },
];
