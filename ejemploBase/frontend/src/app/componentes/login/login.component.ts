import { AuthService } from './../../servicios/auth.service';

import { NgForm } from '@angular/forms';

import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private router: Router;
  private auth: AuthService;
  
  constructor(protected routerp:Router, authp:AuthService) {
    this.router=routerp;
    this.auth=authp;
   }

  login (form:NgForm){
    const usuario=form.value.usuario;
    const password=form.value.password; 
    this.auth.login(usuario,password).pipe(first()).subscribe((respuesta: any) =>{
      console.log(respuesta);
      if (respuesta){
        localStorage.setItem('token',respuesta);
        this.router.navigate(['/Home']);
      }
      
    })
  }

  ngOnInit(): void {

  }


}
