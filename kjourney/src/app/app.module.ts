import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';

import { BandComponent } from './band/band.component';
import { GraphViewComponent } from './graphView/GraphView.component';

import { BandsComponent } from './bands/bands.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './_helpers/basic-auth.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { CapabilityComponent } from './capability/capability.component';
import { JobfamilyComponent } from './jobfamily/jobfamily.component';
import { RolesComponent } from './roles/roles.component';
import { NavbarcapComponent } from './navbarcap/navbarcap.component';
import { NavbarjobfamilyComponent } from './navbarjobfamily/navbarjobfamily.component';
import { MessageService } from 'AuxServices/message.service';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BandComponent,
    GraphViewComponent,
    LoginComponent,
    BandsComponent,
    CapabilityComponent,
    JobfamilyComponent,
    RolesComponent,
    NavbarjobfamilyComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MessageService,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },{
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
