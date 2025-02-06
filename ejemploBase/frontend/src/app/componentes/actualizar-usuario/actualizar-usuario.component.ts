import { Component, OnInit } from '@angular/core';
import { Modulo } from 'src/app/interfaces/modulo';
import { ApiServiceService } from 'src/app/servicios/api-service.service';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {

  modulo:Modulo[]=[];

  // inyectar el servicio siempre en el constructor a través de la variable actualizarmodulo
  constructor(private actualizarmodulo:ApiServiceService){
  }

  //se suscribe al observable que devuelve el método updateModulo del servicio
  actualizarModulo(mod: Modulo) {
    this.actualizarmodulo.updateModulo(mod).subscribe();
  }


  ngOnInit(): void{
    
  }

}
