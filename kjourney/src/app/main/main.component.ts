import { Component, OnInit } from '@angular/core'
import * as Treeviz from 'treeviz'
import { DataService } from '../data.service'
import { Role } from '../../models/role'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private data: DataService
  public roles: Role[]

  constructor(data: DataService) {
    this.data = data
  }

  async ngOnInit() {
    this.roles = await this.data.getRoles()
  }

}
