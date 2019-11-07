import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { BandRole } from '../../models/bandRole'

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.css']
})
export class BandsComponent implements OnInit {
  private data: DataService
  public bandRole: BandRole[]

  constructor(data: DataService) {
    this.data = data
  }

  async ngOnInit() {
    this.bandRole = await this.data.getBandRole()
  }

}
  
