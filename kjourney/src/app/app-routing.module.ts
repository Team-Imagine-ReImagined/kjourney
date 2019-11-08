import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { BandsComponent } from './bands/bands.component';
import { AuthGuard } from './_helpers/auth.guard';



const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', component: MainComponent, canActivate: [AuthGuard]
  },
  {
    path: 'home', component: MainComponent
  },
  {
    path: 'bands', component: BandsComponent, canActivate: [AuthGuard]
  },
  // otherwise redirect to home
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
