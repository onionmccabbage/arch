import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }
  // data model for this component
  ch = {}
  // @Input lets us receive values from outside
  @Input() newUser = {} // we will receive new users as an object
  usersArr = [{u:'Initial', p:'Pwd'}] // we start with an empty array
  // here are some life-cycle hooks for when lifecycle events happen
  ngOnInit(): void {
  }

  // currently using :any type to get round typescript ...
  ngOnChanges(changes:any){ // SimpleChange comes from core
    // this is fired whenever an @Input data-bound member is altered
    this.ch = changes
    let usr = changes.newUser.currentValue['u']
    let pwd = changes.newUser.currentValue['p']
    // push the new values onto the users array
    this.usersArr.push({u:usr, p:pwd})
  }

}
