import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RoleDetailsComponent } from './role-details/role-details.component';
import { AsJobFamilyPipe } from './as-job-family.pipe';
import { AsBandPipe } from './as-band.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    RoleDetailsComponent,
    AsJobFamilyPipe,
    AsBandPipe
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
