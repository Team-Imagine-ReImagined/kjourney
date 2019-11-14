import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services/authentication.service';
import { User } from './user';
import { Capability } from 'src/models/capability';
import { DataService } from './data.service';
import { NavbarcapComponent } from './nav-bar'

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
  
    ) {
    
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
}

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login'], { queryParams: { returnUrl: this.router.url } });
}

}
