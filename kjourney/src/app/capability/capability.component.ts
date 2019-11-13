import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Role } from '../../models/role';
import { Capability } from '../../models/capability';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-capability',
  templateUrl: './capability.component.html',
  styleUrls: ['./capability.component.css']
})

export class CapabilityComponent implements OnInit {
  private data: DataService;
  public roles: Role[];
  public capabilities: Capability[];
  public capabilityID: number;

  constructor(data: DataService, private route: ActivatedRoute) {
    this.data = data;
  }

  ngOnInit() {

    this.capabilityID = Number(this.route.snapshot.queryParamMap.get('capabilityID'));
    this.data.getRoles().subscribe((r => {
      this.roles = r;
    }));
    this.data.getCapabilities(this.capabilityID).subscribe((r => {
      this.capabilities = r;
    }));
  }

}
