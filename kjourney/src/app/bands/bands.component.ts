import {Component, OnDestroy, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import { Competency } from '../../models/competency';
import { Responsibility } from '../../models/responsibility';
import { TrainingPerBand } from '../../models/trainingPerBand';
import { BandRole } from '../../models/bandRole';
import { ActivatedRoute } from '@angular/router';
import { Band } from '../../models/band';

@Component({
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.css']
})

export class BandsComponent implements OnInit, OnDestroy {
  private data: DataService
  public trainingPerBands: TrainingPerBand[]
  public competencies: Competency[]
  public responsibilities: Responsibility[]
  public bandRoles: BandRole[]
  private sub: any;
  public bandID: number;
  public bands: Band[];

  constructor(data: DataService, private route: ActivatedRoute) {
    this.data = data;
  }

  async ngOnInit() {

    this.bandID = +this.route.snapshot.queryParamMap.get('bandID');

    console.log('Searching for Band ID: ' + this.bandID)

    this.data.getTrainingPerBand(this.bandID).subscribe((a => {
      this.trainingPerBands = a;
    }));

    this.data.getCompetencies(this.bandID).subscribe((c => {
      this.competencies = c;
    }));

    this.data.getResponsibilities(this.bandID).subscribe((r => {
      this.responsibilities = r;
    }));

    this.data.getBandRoles(this.bandID).subscribe((br => {
      this.bandRoles = br;
    }));

    this.data.getBandName(this.bandID).subscribe((bn => {
      console.log(bn)
      this.bands = bn;
    }))

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
