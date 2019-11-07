import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Role } from '../models/role';
import { Competency } from '../models/competency';
import { Observable } from 'rxjs';
import { TrainingPerBand } from '../models/trainingPerBand';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {
  }

  public getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>('api/roles');
  }

  public getCompetencies(): Observable<Competency[]> {
    return this.http.get<Competency[]>('api/competencies');
  }

  public getTrainingPerBand(bandID): Observable<TrainingPerBand[]> {
    return this.http.get<TrainingPerBand[]>('/api/training/' + bandID);
  }
}
