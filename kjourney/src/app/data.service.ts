import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Role } from '../models/role';
import { Competency } from '../models/competency';
import { Responsibility } from '../models/responsibility';
import { Observable } from 'rxjs';


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

  public getResponsibilities(bandID): Observable<Responsibility[]> {
    return this.http.get<Responsibility[]>('api/responsibilities/' + bandID);
  }
}
