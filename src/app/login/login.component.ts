// careful - EventEmitter, Input and Output all come from core
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  // declare model data for this component
  // we need an EventEmitter in order to send data out of this component
  @Output() dataEvent = new EventEmitter()
  user = 'Ada'
  pass = 'Babbage'
  ngOnInit(): void {
  }
  // declare methods for this component
  handleBtnGo(){
    // here we will emit our custom event
    let myData = {u:this.user, p:this.pass}
    this.dataEvent.emit(myData) // we can send trivial or complex data structures
  }

}
