import { Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { ClubComponent } from './club/club.component';

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
];
