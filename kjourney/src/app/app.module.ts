import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import {MatSidenav} from '@angular/material';
import { MatSlideToggleModule,
  MatMenuModule, MatButtonModule, MatIconModule,
  MatCardModule, MatSidenavModule, MatSliderModule, MatCheckboxModule, MatTabsModule } from '@angular/material';

import { BandsComponent } from './bands/bands.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './_helpers/basic-auth.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { CapabilityComponent } from './capability/capability.component';
import { JobfamilyComponent } from './jobfamily/jobfamily.component';
import { NavbarcapComponent } from './navbarcap/navbarcap.component';
import { NavbarjobfamilyComponent } from './navbarjobfamily/navbarjobfamily.component';
import { RegisterUserComponent } from './register-user/register-user.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { MatExpansionModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    BandsComponent,
    CapabilityComponent,
    JobfamilyComponent,
    NavbarcapComponent,
    NavbarjobfamilyComponent,
    RegisterUserComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatCheckboxModule,
    MatTabsModule,
    MatSidenavModule,
    ReactiveFormsModule

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
  }],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
