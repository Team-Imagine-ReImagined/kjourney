import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public newUser : User;
  private loginErrorMessage: String = "";
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.newUser = new User();
  }

  loginUser(userFromForm:User) :void {
    var response = this.http.post('/api/login', this.newUser).toPromise().then( (result : any) => {
      if(result.Status === 200){
        //log in etc
        this.loginErrorMessage = "";
      } else {
        this.loginErrorMessage = result.Message;
      }
    })
  }
    

  

}

