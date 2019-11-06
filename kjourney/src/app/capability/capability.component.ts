import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Role } from '../../models/role';
import { Capability } from '../../models/capability';

@Component({
  selector: 'app-capability',
  templateUrl: './capability.component.html',
  styleUrls: ['./capability.component.css']
})

export class CapabilityComponent implements OnInit {
  private data: DataService;
  public roles: Role[];
  public capabilities: Capability[];

  constructor(data: DataService) {
    this.data = data
  }

  ngOnInit() {
    this.data.getRoles().subscribe((r => {
      this.roles = r;
    }));
    this.data.getCapabilities().subscribe((r => {
      this.capabilities = r;
    }));
  }

}
