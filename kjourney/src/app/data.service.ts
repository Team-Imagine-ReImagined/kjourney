import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Role } from '../models/role';
import { Competency } from '../models/competency';
import { Responsibility } from '../models/responsibility';
import { TrainingPerBand } from '../models/trainingPerBand';
import { BandRole } from '../models/bandRole';
import { Observable } from 'rxjs';
import { Band } from '../models/band';

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
    return this.http.get<Competency[]>('api/competencies?bandID=' + bandID);
  }

  public getTrainingPerBand(bandID): Observable<TrainingPerBand[]> {
    return this.http.get<TrainingPerBand[]>('/api/training?bandID=' + bandID);
  }

  public getResponsibilities(bandID): Observable<Responsibility[]> {
    return this.http.get<Responsibility[]>('api/responsibilities?bandID=' + bandID);
  }

  public getBandRoles(bandID): Observable<BandRole[]> {
    return this.http.get<BandRole[]>('api/roles?bandID=' + bandID);
  }

  public getBandName(bandID): Observable<Band[]> {
    return this.http.get<Band[]>('api/bands/' + bandID);
  }
}
