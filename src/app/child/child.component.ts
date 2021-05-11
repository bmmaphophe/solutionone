import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<div class="container"><div class="row"><div class="card card-body" style="width: 18rem;"><div class="card-title"><span> FirstName: {{person.firstName}}</span></div>
  <div class="card-title"><span> LastName: {{person.lastName}}</span></div>
  <div class="card-title"><span> Age: {{person.age}}</span></div>
  <div> <button  class="btn btn-primary" (click)="SendInformationToTheParent()">Click Child</button></div></div></div></div>

  `,
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() person: any;
  @Output() childData = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  SendInformationToTheParent(){
    this.childData.emit('This comes from the Child Component');
  }

}
