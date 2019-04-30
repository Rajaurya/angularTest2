import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  Blog:any[] = [{image:"./assets/images/property-1.jpg",Discount:"30% Discount to Travel"},{image:"./assets/images/property-2.jpg",Discount:"Planning for Vacation"}, {image:"./assets/images/property-3.jpg",Discount:"Visit Tokyo Japan"}, {image:"./assets/images/property-4.jpg",Discount:"New State"}, {image:"./assets/images/property-5.jpg",Discount:"Ladak"}, 
  {image:"./assets/images/property-6.jpg",Discount:"Manali"}]

  myBlog:string = 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts'

constructor(){}

  ngOnInit() {
  }

}
