import { Component, OnInit,ComponentFactoryResolver } from '@angular/core';
import { MessageService } from '../../../AuxServices';
import { CapabilityById } from '../../src/models';
import { JobFamByCapId } from '../../src/models';
import { DataService } from '../data.service';


@Component({
  selector: 'app-navbarcap',
  templateUrl: './navbarcap.component.html',
  styleUrls: ['./navbarcap.component.css']
})
export class NavbarcapComponent implements OnInit {
  public data: DataService;
  public Capability: CapabilityById[];
  public JobFamily: JobFamByCapId[];
  constructor(data:DataService) { 
  this.data = data;
  }
  
  ngOnInit(): void {
    let checker:Boolean = true;
    let counter:number = 0;
    this.data.getCapability;
  }

  }
