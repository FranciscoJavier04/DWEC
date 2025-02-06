import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './../../servicios/api-service.service';
import { Modulo } from 'src/app/interfaces/modulo';

@Component({
  selector: 'app-borrar-usuario',
  templateUrl: './borrar-usuario.component.html',
  styleUrls: ['./borrar-usuario.component.css']
})
export class BorrarUsuarioComponent implements OnInit {

  modulo:Modulo[]=[];


  // inyectar el servicio en el constructor
  constructor(private borrarmodulo:ApiServiceService){
  }

  //suscripción al servicio
  borrarModulo(idModulo:number){
    this.borrarmodulo.borrarModulo(idModulo).subscribe(()=>{this.modulo=this.modulo.filter(m=>m.id!==idModulo);console.log(this.modulo)});
  
    }

  ngOnInit(): void{
    //this.borrarmodulo.listarModulos().subscribe(modulo=>{(this.modulo=modulo);console.log(modulo)});
  }

}
