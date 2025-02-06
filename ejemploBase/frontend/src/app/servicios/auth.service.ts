import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuarios } from "../interfaces/usuarios";


@Injectable({
  providedIn: "root"
})

export class AuthService {
  
  private apiUrl="http://localhost:5555/usuarios";
  
  constructor(private http: HttpClient) {
    
  }

  login(iduser: string, password:string): Observable<Usuarios> {
    return this.http.get<Usuarios>(`${this.apiUrl}/${iduser}`);
  }
}