import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
