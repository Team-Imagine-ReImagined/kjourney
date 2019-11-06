import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Band } from '../../models/band'

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.css']
})
export class BandsComponent implements OnInit {
  private data: DataService
  public bands: Band[]

  constructor(data: DataService) {
    this.data = data
  }

  async ngOnInit() {
    this.bands = await this.data.getBands()
  }

}
  
