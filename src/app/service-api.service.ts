import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  constructor(private _http :  HttpClient) { }

  getUserDetails(){
    return this._http.get('https://jsonplaceholder.typicode.com/users')
  }

  getUserDetails_2(){
    return this._http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
