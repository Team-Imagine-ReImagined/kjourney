import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Role } from '../models/role';
import { Competency } from '../models/competency';
import { Responsibility } from '../models/responsibility';
import { TrainingPerBand } from '../models/trainingPerBand';
import { BandRole } from '../models/bandRole';
import { Observable } from 'rxjs';
import { Capability } from '../models/capability';
import { JobFamily } from '../models/jobFamily';
import { Band } from '../models/band';
import { UserInfo } from 'src/models/userInfo';
import { Hierarchy } from 'src/models/hierarchy';

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

  public postsecureGenerateUser(username, password, roleID, fullname): Promise<any> {
    // is promise[any] as it could possibly include error handling information
    return this.http.post('api/secureGenerateUser', {username, password, roleID, fullname}).toPromise()
  }

  public getUserInfo(): Observable<UserInfo[]> {
    return this.http.get<UserInfo[]>('api/getUserInfo');
  }
  public getHierarchy(bandID): Observable<Hierarchy[]> {
    return this.http.get<Hierarchy[]>('api/hierarchy/' + bandID);
  }
  public getCapabilities(ID): Observable<Capability[]> {
    return this.http.get<Capability[]>('api/capabilities/?capabilityID=' + ID);
  }
  public getJobFamilies(): Observable<JobFamily[]> {
    return this.http.get<JobFamily[]>('api/jobFamilies');
  }
}
