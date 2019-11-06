import { Component, OnInit } from '@angular/core';
import { JobFamily } from '../../models/jobFamily';
import { DataService } from '../data.service';

@Component({
  selector: 'app-jobfamily',
  templateUrl: './jobfamily.component.html',
  styleUrls: ['./jobfamily.component.css']
})
export class JobfamilyComponent implements OnInit {
  private data: DataService;
  public jobFamilies: JobFamily[];

  constructor(data: DataService) {
    this.data = data
  }
  ngOnInit() {
    this.data.getJobFamilies().subscribe((r => {
      this.jobFamilies = r;
    }));
  }

}
