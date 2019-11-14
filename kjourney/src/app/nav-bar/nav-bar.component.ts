import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { DataService } from '../data.service';
import { Capability } from '../../models/capability';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavbarComponent implements OnInit {
  public data: DataService;
  public capabilities: Capability[];
  public name: string[];
  constructor(data: DataService) {
  this.data = data;
  }

  ngOnInit(): void {
    this.data.getCapabilities().subscribe((n => {
      this.capabilities = n;
      }));

  }

  }
