import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';


import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public newUser : User;
  private loginErrorMessage: String = "";
  loading = false;
  submitted = false;
  error = '';

  private returnUrl: string;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,

) { 
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) { 
        this.router.navigate(['/']);
    }
}

  ngOnInit() {
    this.newUser = new User();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }

  loginUser(userFromForm:User) :void {
    var response = this.http.post('/api/login', this.newUser).toPromise().then( (result : any) => {
      if(result.Status === 200){
        //log in etc

        var user : User = result.User;
        this.loginErrorMessage = "";

        user.authenticationdata = result.Auth;
        localStorage.setItem('currentUser', JSON.stringify(user));

        this.authenticationService.setUser(user);
        this.router.navigate([this.returnUrl]);

        this.newUser = new User();

      } else {
        this.loginErrorMessage = result.Message;
      }
    })
  }
}

