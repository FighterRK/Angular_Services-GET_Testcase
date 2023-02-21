import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from './service-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'api-app';
  public UserData : any;
  public userDetails : any;

  constructor(private api_Service : ServiceApiService){}

  getUserDetails(){
     this.api_Service.getUserDetails().subscribe(response =>{
      console.log('response', response);
      this.UserData = response;
      
    })
    
  }

  getUserDetails_2(){
    this.api_Service.getUserDetails_2().subscribe(res =>{
      this.userDetails = res;
      console.log(res);
      
    })
  }

  ngOnInit() {
    this.getUserDetails()
    this.getUserDetails_2()
      
  }
  
}
