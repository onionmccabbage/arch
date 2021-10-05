import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // typescript lets us be scrict in our data types
  title:string = '';
  data:string  = '' // an initial value
  receivedData:object = {} // ready for our API service to populate
  // we need a constructor in order to instantiate our service
  constructor(private apiService:ApiService){}

  // methods for this component
  // Typescript lets us specify a return type for our methods
  handleDataEvent(evt:any):void{ // TypeScript expecte us to declare a data type
    // here we handle the custom dataEvent coming from login compoent instances
    this.data = evt
  }
  makeServiceCall(){
    // this.title = 2 // oops - we broke the typescript rules


    // here we send a parameter to our servive method and receive data from the remote API
    this.apiService.getOneUser('3').subscribe((apiData) => { this.receivedData = apiData });
  }
}
