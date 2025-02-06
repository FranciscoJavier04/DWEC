import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  private router: Router;
 token=localStorage.getItem('token');
      
constructor(protected routerp:Router){
  this.router=routerp;
};

  ngOnInit(): void {
    if (this.token){
      localStorage.removeItem('token');
      this.router.navigate(['/Home']);
    }
  }

}
