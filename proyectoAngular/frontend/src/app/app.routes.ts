import { Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { ClubComponent } from './components/club/club.component';
import { LoginComponent } from './components/login/login.component';
import { BackendComponent } from './components/backend/backend.component';
import { EditarUsuarioComponent } from './components/editComponents/editar-usuario/editar-usuario.component';
import { InsertUserComponent } from './components/insertComponents/insert-user/insert-user.component';
import { InsertClubComponent } from './components/insertComponents/insert-club/insert-club.component';
import { InsertFutbolistaComponent } from './components/insertComponents/insert-futbolista/insert-futbolista.component';

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
    component: BackendComponent,
  },
  {
    path: 'editar',
    title: 'Editar',
    component: EditarUsuarioComponent,
  },
  {
    path: 'insertarUser',
    title: 'InsertarUser',
    component: InsertUserComponent,
  },
  {
    path: 'insertarclub',
    title: 'insertarclub',
    component: InsertClubComponent,
  },
  {
    path: 'insertarFutbolista',
    title: 'insertarFutbolista',
    component: InsertFutbolistaComponent,
  },
];
