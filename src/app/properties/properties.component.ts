import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  Properties:any[] = [{image:"./assets/images/property-1.jpg",properties:"Modern Branch In NZ",price:"$3000"},{image:"./assets/images/property-2.jpg",properties:"Near Branch",price:"$3000"}, {image:"./assets/images/property-3.jpg",properties:"Haweli",price:"$3000"}, {image:"./assets/images/property-4.jpg",properties:"Tomb",price:"$5000"}, {image:"./assets/images/property-5.jpg",properties:"Garden",price:"$3000"}, 
  {image:"./assets/images/property-6.jpg",properties:"Luxery",price:"$3400"}]



  myProperties:string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores.'

  

  constructor() { }

  ngOnInit() {
  }

}
