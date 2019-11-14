import { Component, OnInit,ComponentFactoryResolver } from '@angular/core';
import { CapabilityFind } from "src/models/CapabilityById";
import { JobFamByCapId } from 'src/models/JobFamByCapId';
import { DataService } from '../data.service';
import { Capabilities } from 'protractor';


@Component({
  selector: 'app-navbarcap',
  templateUrl: './navbarcap.component.html',
  styleUrls: ['./navbarcap.component.css']
})
export class NavbarcapComponent implements OnInit {
  public data: DataService;
  public Capability: CapabilityFind[];
  public JobFamily: JobFamByCapId[];
  public name: string[];
  constructor(data:DataService) { 
  this.data = data;
  }
  
  ngOnInit(): void {
    let checker:Boolean = true;
    let counter:number = 0;
    let total:number = CapabilityFind.length

    this.data.getCapability().subscribe((n => {
      this.Capability = n;
      console.log("checker two " + n)
      }));
     
  }

  }
