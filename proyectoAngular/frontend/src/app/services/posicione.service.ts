import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PosicionesAsignadas } from '../interfaces/posiciones_asignadas';
import { Posiciones } from '../interfaces/posiciones';

@Injectable({
  providedIn: 'root',
})
export class PosicioneService {
  private baseURL = 'http://localhost:9090/futbolista';
  private baseURL2 = 'http://localhost:9090/posicion';

  constructor(private http: HttpClient) {}

  getPosicionesAsignadas(): Observable<PosicionesAsignadas[]> {
    return this.http.get<PosicionesAsignadas[]>(this.baseURL + '/obt');
  }
  getPosiciones(): Observable<Posiciones[]> {
    return this.http.get<Posiciones[]>(this.baseURL2 + '/obt');
  }
  deletePosiciones(id: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete<any>(`${this.baseURL2}/borrar`, {
      headers,
      body: { id }, // Enviamos el ID en el cuerpo
    });
  }
  deletePosicionAsignada(id: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete<any>(`${this.baseURL}/borrar`, {
      headers,
      body: { id }, // Enviamos el ID en el cuerpo
    });
  }
  getPosicionesPorFutbolista(futbolista_id: number): Observable<Posiciones[]> {
    return this.http.get<Posiciones[]>(`${this.baseURL}/posicionesPorFutbolista/${futbolista_id}`);
  }
  agregarPosicion(futbolistaId: number, posicionId: number): Observable<any> {
    const body = {
      futbolista_id: futbolistaId,
      posicion_id: posicionId
    };

    return this.http.post<any>(`${this.baseURL}/agregar`, body);

  }
}
