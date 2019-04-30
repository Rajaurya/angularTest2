import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {

  images:any[] = [{image:"./assets/images/user-1.jpg",Name:"Jean Smith"},{image:"./assets/images/user-2.jpg",Name:"Hush Raven"}, {image:"./assets/images/user-3.jpg",Name:"Alex king"}, {image:"./assets/images/user-4.jpg",Name:"Hush Raven"}, {image:"./assets/images/user-1.jpg",Name:"jean Smith"}, 
  {image:"./assets/images/user-2.jpg",Name:"Varun Rajaurya"}]



  myagent:string = 'Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat'

  constructor() { }

  ngOnInit() {
  }
}