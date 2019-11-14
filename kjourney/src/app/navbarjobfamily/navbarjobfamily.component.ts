import {
  ComponentFactoryResolver,
  Injectable,
  Inject,
  ReflectiveInjector,
  Component, 
  OnInit,
  Input
} from '@angular/core'
import { DataService } from '../data.service';
import { JobFamByCapId } from 'src/models/JobFamByCapId';
import { CapabilityFind } from 'src/models/CapabilityById';

@Component({
  selector: 'app-navbarjobfamily',
  templateUrl: './navbarjobfamily.component.html',
  styleUrls: ['./navbarjobfamily.component.css']
})
export class NavbarjobfamilyComponent implements OnInit {

  public data: DataService;
  public Capability: CapabilityFind[];
  public JobFamily: JobFamByCapId[];
  constructor(data:DataService) { 
    this.data = data;
  }

  ngOnInit() {
    let checker:Boolean = true;
    let counter:number = 0;
    this.data.getCapability;
    this.data.getJobFamByCapId(1);
    
    counter = counter+1;
  }
  }

