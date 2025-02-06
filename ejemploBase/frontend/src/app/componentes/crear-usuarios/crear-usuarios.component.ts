import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './../../servicios/api-service.service';
import { Modulo } from 'src/app/interfaces/modulo';

@Component({
  selector: 'app-crear-usuarios',
  templateUrl: './crear-usuarios.component.html',
  styleUrls: ['./crear-usuarios.component.css']
})
export class CrearUsuariosComponent implements OnInit {

  modulo:Modulo[]=[];

  // inyectar el servicio en el constructor
  constructor(private listarmodulos:ApiServiceService){
  }

  //suscripción al observable al que se le indica el módulo a insertar
  agregarModulo(mod:Modulo){
    this.listarmodulos.anadirModulo(mod).subscribe((mod=>{this.modulo.push(mod);console.log(this.modulo)}))
  }

  ngOnInit(): void{
    //this.listarmodulos.listarModulos().subscribe(modulo=>{(this.modulo=modulo);console.log(modulo)});
    
  }

}
