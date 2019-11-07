import { Component, OnInit } from '@angular/core'
import * as Treeviz from 'treeviz'
import { DataService } from '../data.service'
import { Competency } from '../../models/competency'

@Component({
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.css']
})
export class BandsComponent implements OnInit {
  private data: DataService
  public competencies: Competency[]

  constructor(data: DataService) {
    this.data = data;
  }

  async ngOnInit() {
    this.data.getCompetencies().subscribe((c => {
      this.competencies = c;
    }));
  }

}
