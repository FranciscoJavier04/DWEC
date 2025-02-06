
//importación de la interface
import { Modulo } from './../interfaces/modulo';
//importación del injectable para poder inyectar el servicio a los componentes
import { Injectable } from '@angular/core';
//importación de HttpClient para peticiones asíncronas y Headers para las cabeceras 
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
//importación de observable para poder suscribirse los observadores
import {map, Observable} from 'rxjs';
import { coerceNumberProperty } from '@angular/cdk/coercion';

//cabeceras indicando el tipo de información a enviar
const httpOptions={
 headers:new HttpHeaders({'Content-Type':'application/json',}),
};


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
 //url de la API de la que se va a consumir
 private apiUrl="http://localhost:5555/segundo";
 private url="";

 // variable http para poder reallizar peticiones asíncronas a la API
 constructor(private http:HttpClient) { }

 //Petición de tipo get que devuelve un observable de array de objetos del tipo Modulo de la interface
 listarModulos(): Observable<Modulo[]>{
  this.url=`${this.apiUrl}`;
   return this.http.get<Modulo[]>(this.url);
 }
//Petición de tipo post al que se le pasa el módulo (de tipo de interface Modulo) y que igualmetne devulve un observable
 
 anadirModulo(modulo:Modulo): Observable<Modulo>{
  this.url=`${this.apiUrl}`;
 return this.http.post<Modulo>(this.url,modulo,httpOptions);
 }

// Petición tipo delete al que le pasamos solo el id del módulo a borrar devolviendo el observable
 borrarModulo(idmodulo: number): Observable<Modulo> {
   this.url = `${this.apiUrl}/${idmodulo}`;
   return this.http.delete<Modulo>(this.url);
 }

 //Petición de tipo update al que se le pasa el módulo a actualizar y que devuelve un observable
 updateModulo(modulo: Modulo): Observable<Modulo> {
   this.url = `${this.apiUrl}/${modulo.id}`;
   return this.http.put<Modulo>(this.url, modulo, httpOptions);
 }

 
 }


