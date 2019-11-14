import { Component,ComponentFactoryResolver } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services/authentication.service';
import { User } from './user';
import { DataService } from './data.service';
import { Capabilities } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kjourney';
  currentUser: User;
  public data: DataService;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    data:DataService,
) {




    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
}

  logout() {
    this.data.getCapability();
    this.authenticationService.logout();
    this.router.navigate(['/login'], { queryParams: { returnUrl: this.router.url } });
}

}
