import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { DataService } from '../data.service';
import { Capability } from '../../models/capability';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavbarComponent implements OnInit {
  public data: DataService;
  public capabilities: Capability[];
  public name: string[];
  constructor(
    public auth: AuthenticationService,
    data: DataService
    ) {
  this.data = data;
  }
  
  ngOnInit(): void {
    let Userin:Number = 0;
    this.data.getCapabilities().subscribe((n => {
      this.capabilities = n;
      }));
      
  }

  }
