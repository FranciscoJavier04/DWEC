import { Club } from "../clubs";
import { Usuario } from "../usuario";

export interface DatosAltaFutbolista {
  edad: number;
  fechaNac: Date;
  nacionalidad: string;
  nombre: string;
  imagen: string;
  club: Club;
  usuario: Usuario;
}
