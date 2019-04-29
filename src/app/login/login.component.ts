import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MyserviceService]
})
export class LoginComponent implements OnInit {

  constructor(private service : MyserviceService,private routes:Router) { } 
 msg;
  ngOnInit() {
  }
  check (uname:string,p:string){
    var output = this.service.value(uname,p);
    if(output == true){
      this.routes.navigate(['/deshboard']);
    }
    else{
      this.msg = 'Invalid credentials';
    }
  }


}
