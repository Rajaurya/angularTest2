import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
fKeyword="";
fstatus= "";
ftype= "";
fLocation="";
fPrice="";
fBadrooms="";
fBathrooms="";
fArea="";
fParking="";
  constructor()  {}
    
  ngOnInit() {
  }
  onsubmit(form:any): void{
    console.log(form);
    this.fKeyword = form.fKeyword;
    this.fstatus =  form.fstatus;
    this.fLocation = form.fLocation; 
    this.fPrice = form.fPrice;
    this.fBadrooms = form.fBadrooms;
    this.fBathrooms = form.fBathrooms;
    this.fArea = form.fArea;
    this.fParking = form.fParking;
  }

}
