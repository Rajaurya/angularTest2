import { Injectable } from '@angular/core';

@Injectable()
export class MyserviceService {

  constructor() { }
   value(uname:string,pwd:string){
     if(uname=="admin" && pwd == "12345"){
       localStorage.setItem('username',"admin");
       return true;
     }
     else{
       return false;
     }
   }
}
