import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Role } from '../models/role';
import { Competency } from '../models/competency';
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
}
