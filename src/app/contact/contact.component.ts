import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  Name:"";
  Email:"";
  Message:"";
  constructor() { }

  ngOnInit() {
  }

  onsubmit(form:any): void{
    console.log(form);
    this.Name = form.fname;
    this.Email =  form.femail;
    this.Message = form.message;
  }

}
