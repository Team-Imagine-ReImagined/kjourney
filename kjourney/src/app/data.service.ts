import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Role } from '../models/role';
import { Competency } from '../models/competency';
import { Responsibility } from '../models/responsibility';
import { TrainingPerBand } from '../models/trainingPerBand';
import { Observable } from 'rxjs';
import { Capability } from '../models/capability';
import { JobFamily } from '../models/jobFamily';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {
  }

  public getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>('api/roles');
  }

  public getCompetencies(bandID): Observable<Competency[]> {
    return this.http.get<Competency[]>('api/competencies/' + bandID);
  }

  public getTrainingPerBand(bandID): Observable<TrainingPerBand[]> {
    return this.http.get<TrainingPerBand[]>('/api/training/' + bandID);
  }

  public getResponsibilities(bandID): Observable<Responsibility[]> {
    return this.http.get<Responsibility[]>('api/responsibilities/' + bandID);
  }
  public getCapabilities(ID): Observable<Capability[]> {
    return this.http.get<Capability[]>('api/capabilities/?capabilityID=' + ID);
  }

  public getJobFamilies(): Observable<JobFamily[]> {
    return this.http.get<JobFamily[]>('api/jobFamilies');
  }
}
