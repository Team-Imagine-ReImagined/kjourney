import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { BandsComponent } from './bands/bands.component';
import { AuthGuard } from './_helpers/auth.guard';
import { RegisterUserComponent } from './register-user/register-user.component';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';




const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', component: MainComponent, canActivate: [AuthGuard]
  },
  {
    path: 'home', component: MainComponent, canActivate: [AuthGuard]
  },
  {
    path: 'bands', component: BandsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'registerUser', component: RegisterUserComponent
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const appRoutingModule = RouterModule.forRoot(routes);
