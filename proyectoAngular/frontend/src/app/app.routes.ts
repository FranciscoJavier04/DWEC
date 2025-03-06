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
import { AdminGuard } from './guards/is-admin.guard';
import { FutbolistasComponent } from './components/futbolistas/futbolistas.component';
import { InsertPosicionAsignadaComponent } from './components/insertComponents/insert-posicion-asignada/insert-posicion-asignada.component';
import { AuthGuard } from './guards/auth.guard';

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
    canActivate: [AdminGuard],
  },
  {
    path: 'editar',
    title: 'Editar',
    component: EditarUsuarioComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'insertarUser',
    title: 'InsertarUser',
    component: InsertUserComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'insertarclub',
    title: 'insertarclub',
    component: InsertClubComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'insertarFutbolista',
    title: 'insertarFutbolista',
    component: InsertFutbolistaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'misFutbolistas',
    title: 'misFutbolistas',
    component: FutbolistasComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'ipa',
    title: 'ipa',
    component: InsertPosicionAsignadaComponent,
    canActivate: [AuthGuard],
  }
];
