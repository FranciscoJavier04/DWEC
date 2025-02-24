import { Club } from './clubs';
import { Usuario } from './usuario';

export interface Futbolista {
  id: number;
  edad: number;
  fecha_nac: Date;
  Usuario: Usuario;
  nacionalidad: string;
  nombre: string;
  Club: Club;
  imagen: string;
}
