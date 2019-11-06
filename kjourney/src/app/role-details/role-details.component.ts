import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Role } from 'src/models/role';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-role-details',
  templateUrl: './role-details.component.html',
  styleUrls: ['./role-details.component.css']
})
export class RoleDetailsComponent implements OnInit {
  public role: Promise<Role>

  constructor(private data: DataService, private route: ActivatedRoute) {
  }

  async ngOnInit() {
    this.role = this.data.getRoleDetails(this.route.snapshot.params.id)
  }

}
