import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Club } from '../interfaces/clubs';
import { Futbolista } from '../interfaces/futbolista';

@Injectable({
  providedIn: 'root',
})
export class FutbolistaService {
  private baseURL = 'http://localhost:9090/futbolista';

  constructor(private http: HttpClient) {}

  getFutbolista(): Observable<Futbolista[]> {
    return this.http.get<Futbolista[]>(this.baseURL + '/obtener');
  }
}
