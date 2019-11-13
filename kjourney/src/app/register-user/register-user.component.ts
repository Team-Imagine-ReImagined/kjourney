import { Injectable } from '@angular/core';
import { RegisterUserModel } from './register-user-model';
import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ControlContainer } from '@angular/forms';
import { AuthenticationService } from '../_services/authentication.service';
import { User } from '../user';
import { HttpClient, HttpHeaders,  HttpResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

import { first } from 'rxjs/operators';



@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegisterUserComponent implements OnInit {
  public regUser : RegisterUserModel;
  public jobDropDownEnabled : boolean = false;
  public jobRoleDropDownEnabled : boolean = false;
  public loginErrorMessage = "";

  form: FormGroup = this.fb.group({
    username: [null],
    password: [null],
    confirmPassword: [null],
    capDropDown: [null],
    jobFamDropDown: [null],
    jobRoleDropDown: [null],
    fullname: [null]   
  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private authenticationService: AuthenticationService,
    private router: Router,
    private data: DataService) {}

  // defined the array of data
  capabilities: Object[] = [

];

  jobFamilies: Object[] = [];

  roles: Object[] = [];

    public passwordCheckValid : boolean = false;

  ngOnInit() {
    this.regUser = new RegisterUserModel();
    this.form.controls.jobFamDropDown.disable();
    this.form.controls.jobRoleDropDown.disable();
    //set value for capabilityDropDown
    this.http.get('api/capabilities').subscribe((rs:any)=>{
      this.capabilities = rs.Data;
    })
  
  }

  filterJobFam() {
    const capVal:any = this.form.controls.capDropDown.value;
    if(capVal){
      this.form.controls.jobFamDropDown.enable();
      this.http.get('api/jobFamilies', { params: {capID: capVal}}).subscribe((rs:any)=>{
        this.jobFamilies = rs.Data;
      });
      this.form.controls.jobFamDropDown.reset();
      this.form.controls.jobRoleDropDown.reset();
    } else{
      this.form.controls.jobFamDropDown.disable();
    }

}

  filterRoles(){
    const jobFamVal:any = this.form.controls.jobFamDropDown.value;
    if(jobFamVal){
      this.form.controls.jobRoleDropDown.enable();
      this.http.get('api/jobRoles', {params:{jobFamID: jobFamVal}}).subscribe((rs:any)=>{
        this.roles = rs.Data;
      });
      this.form.controls.jobRoleDropDown.reset();
    }else{
      this.form.controls.jobRoleDropDown.disable();
    }
    //update roles list here
    //getRolesWhereJobFam=x
  }

  registerUser(registerUser:RegisterUserModel) :void {
    
    const control = this.form.controls;
    const pword= control.password.value;
    const cpword = control.confirmPassword.value;
    if(pword === cpword){
      this.data.postsecureGenerateUser(control.username.value, control.password.value, 
        control.jobRoleDropDown.value,control.fullname.value).then(((res:any)=>{
          //if status 200
          if(res.Status === 200){
          var user : User = res.User;
          this.loginErrorMessage = "";

        user.authenticationdata = res.Auth;
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.authenticationService.setUser(user);
        this.router.navigate(['/']);

          } else{
            this.loginErrorMessage = res.Message;
          }
          

        }))

    } else{
      this.loginErrorMessage = "passwords not matching";
      //error message password doesn't match
    }

  }


  

}
