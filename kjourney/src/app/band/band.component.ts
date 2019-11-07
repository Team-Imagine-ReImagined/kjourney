import { Component, OnInit } from '@angular/core';
import { Role } from '../../models/role'
import { DataService } from '../data.service'

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.css']
})
export class BandComponent implements OnInit {
  private data: DataService
  public roles: Role[]

  
  constructor(data: DataService) {
    this.data = data
  }

  async ngOnInit() {
    this.roles = await this.data.getRoles()
  }

}