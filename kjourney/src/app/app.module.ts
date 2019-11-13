import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';

import { BandsComponent } from './bands/bands.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './_helpers/basic-auth.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { CapabilityComponent } from './capability/capability.component';
import { JobfamilyComponent } from './jobfamily/jobfamily.component';
import { RolesComponent } from './roles/roles.component';
import { NavbarcapComponent } from './navbarcap/navbarcap.component';
import { NavbarjobfamilyComponent } from './navbarjobfamily/navbarjobfamily.component';
import { RegisterUserComponent } from './register-user/register-user.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    BandsComponent,
    CapabilityComponent,
    JobfamilyComponent,
    RolesComponent,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
