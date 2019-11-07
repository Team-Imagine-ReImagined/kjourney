import { Component, OnInit } from '@angular/core';
import * as Treeviz from 'treeviz';
import { DataService } from '../data.service';
import { Competency } from '../../models/competency';
import { Responsibility } from '../../models/responsibility';
import { TrainingPerBand } from '../../models/trainingPerBand';

@Component({
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.css']
})
export class BandsComponent implements OnInit {
  private data: DataService
  public trainingPerBand: TrainingPerBand[]
  public competencies: Competency[]
  public responsibilities: Responsibility[]

  constructor(data: DataService) {
    this.data = data;
  }

  async ngOnInit() {
    this.data.getTrainingPerBand(1).subscribe((a => {
      this.trainingPerBand = a;
    }));

    this.data.getCompetencies(1).subscribe((c => {
      this.competencies = c;
    }));

    this.data.getResponsibilities(1).subscribe((r => {
      this.responsibilities = r;
    }));
  }
}
