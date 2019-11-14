import {
  ComponentFactoryResolver,
  Injectable,
  Inject,
  ReflectiveInjector,
  Component, 
  OnInit 
} from '@angular/core'
import { DataService } from '../data.service';
import { CapabilityById } from '../../src/models';
import { JobFamByCapId } from '../../src/models';
export class DynamicComponent { }

@Component({
  selector: 'app-jobfamily',
  styleUrls: ['./jobfamily.component.css'],
  template: `<h2>I'm dynamically attached</h2>`
})
export class JobfamilyComponent implements OnInit {

  public data: DataService;

  constructor(data:DataService,ID) { 
    this.data = data;
  }

  ngOnInit() {
  }

}
