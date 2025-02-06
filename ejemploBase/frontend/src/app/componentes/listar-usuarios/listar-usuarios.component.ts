import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './../../servicios/api-service.service';
import { Modulo } from 'src/app/interfaces/modulo';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  modulo:Modulo[]=[];

  // inyectar el servicio en el constructor
  constructor(private listarmodulos:ApiServiceService){
    
  }

  //nos suscribimos al servicio
  ngOnInit(): void{
    this.listarmodulos.listarModulos().subscribe(modulo=>{(this.modulo=modulo);console.log(modulo)});
    
  }
}
