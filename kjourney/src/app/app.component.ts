import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services/authentication.service';
import { User } from './user';
import { Capability } from 'src/models/capability';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kjourney';
  currentUser: User;
  Capabilities: Capability[];
  private data :DataService
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    public auth: AuthenticationService,
    ) {
      let userstat:Boolean = true;
      const currentUser = this.auth.currentUserValue;
      if (!currentUser) {

        userstat = true;
        //ng if -> generate top bar
      } else{
        userstat = false;
        //ng if -> generate log in button at top
      }
    
     
}

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login'], { queryParams: { returnUrl: this.router.url } });

}

}
