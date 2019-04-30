import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Properties:any[] = [{image:"./assets/images/property-1.jpg",properties:"Modern Branch In NZ",price:"$3000"},{image:"./assets/images/property-2.jpg",properties:"Near Branch",price:"$3000"}, {image:"./assets/images/property-3.jpg",properties:"Haweli",price:"$3000"}, {image:"./assets/images/property-4.jpg",properties:"Tomb",price:"$5000"}, {image:"./assets/images/property-5.jpg",properties:"Garden",price:"$3000"}, 
  {image:"./assets/images/property-6.jpg",properties:"Luxery",price:"$3400"}]



  myProperties:string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores.'

  // Happy client start Here
  Happyclient:string  = "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”"

  //Gappy Client end here


  // Our Agent start here
  images:any[] = [{image:"./assets/images/user-1.jpg",Name:"Jean Smith"},{image:"./assets/images/user-2.jpg",Name:"Hush Raven"}, {image:"./assets/images/user-3.jpg",Name:"Alex king"}, {image:"./assets/images/user-4.jpg",Name:"Hush Raven"}, {image:"./assets/images/user-1.jpg",Name:"jean Smith"}, 
  {image:"./assets/images/user-2.jpg",Name:"Varun Rajaurya"}]



  myagent:string = 'Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat'

  //our Agent end Here


  //our blog
  Blog:any[] = [{image:"./assets/images/property-1.jpg",Discount:"30% Discount to Travel"},{image:"./assets/images/property-2.jpg",Discount:"Planning for Vacation"}, {image:"./assets/images/property-3.jpg",Discount:"Visit Tokyo Japan"}, {image:"./assets/images/property-4.jpg",Discount:"New State"}, {image:"./assets/images/property-5.jpg",Discount:"Ladak"}, 
  {image:"./assets/images/property-6.jpg",Discount:"Manali"}]

  myBlog:string = 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts'

  //blog end
  constructor() { }

  ngOnInit() {
  }

}
