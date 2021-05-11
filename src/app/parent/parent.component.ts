import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  ChildInformation: string;

  person = {
    id: 1,
    firstName: "Joe",
    lastName: "Soap",
    age: 27
  }

  constructor() { }

  ngOnInit() {

  }
  ReviceingChildComponentInformation(data){
    this.ChildInformation = data;
  }
}
