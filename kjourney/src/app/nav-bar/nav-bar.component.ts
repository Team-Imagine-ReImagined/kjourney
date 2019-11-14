import { Component, OnInit,ComponentFactoryResolver } from '@angular/core';
import { DataService } from '../data.service';
import { Capability } from '../../models/capability';

@Component({
  selector: 'app-navbarcap',
  templateUrl: './navbarcap.component.html',
  styleUrls: ['./navbarcap.component.css']
})
export class NavbarcapComponent implements OnInit {
  public data: DataService;
  public capabilities: Capability[];
  public name: string[];
  constructor(data:DataService) { 
  this.data = data;
  }
  
  ngOnInit(): void {
    this.data.getCapabilities().subscribe((n => {
      this.capabilities = n;
      console.log("checker two " + n)
      }));
     
  }

  }
