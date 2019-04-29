import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {

   images:any[] = ["./assets/images/user-1.jpg", "./assets/images/user-2.jpg", "./assets/images/user-3.jpg", "./assets/images/user-4.jpg", "./assets/images/user-1.jpg", 
  "./assets/images/user-2.jpg"]

  myData:string = 'Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat';

  name:any[] = []


  constructor() { }

  ngOnInit() {
  }
}