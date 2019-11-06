import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { HierarchyViewComponent } from './hierarchy-view/hierarchy-view.component';

const routes: Routes = [
  {
    path: 'home', component: MainComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'hierarchy', component: HierarchyViewComponent
  },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
