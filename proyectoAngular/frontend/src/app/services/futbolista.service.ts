import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Club } from '../interfaces/clubs';
import { Futbolista } from '../interfaces/futbolista';
import { DatosAltaFutbolista } from '../interfaces/datosInsert/datosAltaFutbolista';

@Injectable({
  providedIn: 'root',
})
export class FutbolistaService {
  private baseURL = 'http://localhost:9090/futbolista';

  constructor(private http: HttpClient) {}

  getFutbolista(): Observable<Futbolista[]> {
    return this.http.get<Futbolista[]>(this.baseURL + '/obtener');
  }
  deleteFutbolista(id: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete<any>(`${this.baseURL}/borrar1`, {
      headers,
      body: { id }, // Enviamos el ID en el cuerpo
    });
  }
  anadirFutbolista(futbolista: DatosAltaFutbolista): Observable<any> {
    return this.http.post(this.baseURL + '/anadirnuevo', futbolista);
  }
  getFutbolistasPorUsuario(usuarioId: number): Observable<any> {
    const params = new HttpParams().set('usuarioId', usuarioId.toString()); // Agregamos usuarioId como parámetro en la URL
    return this.http.get<any>(`${this.baseURL}/obtenerPorUsuario`, { params });
  }
}
