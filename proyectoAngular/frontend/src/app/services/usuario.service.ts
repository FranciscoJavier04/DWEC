import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';
import { DatosAltaUsuario } from '../interfaces/datosInsert/datosAltaUsuario';
import { DatosAltaUsuario2 } from '../interfaces/datosInsert/datosAltaUsuario2';
import { DatosAutenticaUsuario } from '../interfaces/datosAutenticaUsuario';
@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  //URL de listado de empleados del backend
  private baseURL = 'http://localhost:9090/usuario';
  constructor(private http: HttpClient) {}
  //metodo para obtener los empleados
  obtenerUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseURL + '/obtener');
  }
  anadirUsuario(usuario: DatosAltaUsuario): Observable<any> {
    return this.http.post(this.baseURL + '/anadirnuevo', usuario);
  }
  deleteUsuario(id: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete<any>(`${this.baseURL}/borrar1`, {
      headers,
      body: { id }, // Enviamos el ID en el cuerpo
    });
  }
  editarUsuario(datos: DatosAltaUsuario2): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<any>(`${this.baseURL}/editar`, datos, { headers });
  }
  login(datosLogin: DatosAutenticaUsuario): Observable<any> {
    return this.http.post<any>(`${this.baseURL}/autentica`, datosLogin, {
      withCredentials: true,
    });
  }

  getAuthenticatedUser(): Observable<any>  {
    return this.http.get<any>(`${this.baseURL}/quieneres`, { withCredentials: true });
}


}
