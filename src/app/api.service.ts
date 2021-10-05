import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // this service will access
  // https://jsonplaceholder.typicode.com/users/1

  // we instantiate the HttpClient instance like this
  constructor(private http:HttpClient) { }

  // methods of this service
  getOneUser(whichUser='1'):Observable<any>{
    // build the URL
    let url = `https://jsonplaceholder.typicode.com/users/${whichUser}`
    // make a request
    return this.http.get(url) // NB this is an Observable
  }

}
