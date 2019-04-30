import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout0',
  templateUrl: './layout0.component.html',
  styleUrls: ['./layout0.component.css']
})
export class Layout0Component implements OnInit {
Email:""
  constructor() { }

  ngOnInit() {
  }
  onsubmit(form:any): void{
    console.log(form);
    this.Email = form.femail;
  }
}
