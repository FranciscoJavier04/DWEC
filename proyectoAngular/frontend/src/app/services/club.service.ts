import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Club } from '../interfaces/clubs';


@Injectable({
  providedIn: 'root',
})
export class ClubService {
  private baseURL = 'http://localhost:9090/club';

  constructor(private http: HttpClient) {}

  getClubs(): Observable<Club[]> {
    return this.http.get<Club[]>(this.baseURL + '/obtener');
  }
  deleteClub(id: number): Observable<any> {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.delete<any>(`${this.baseURL}/borrar1`, {
        headers,
        body: { id }, // Enviamos el ID en el cuerpo
      });
    }
}
