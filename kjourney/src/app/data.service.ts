import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Role } from '../models/role';
import { BandRole } from '../models/bandRole';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {
  }

  public getRoles(): Promise<Role[]> {
    return this.http.get<Role[]>('api/roles').toPromise()
  }
  public getBandRole(): Promise<BandRole[]> {
    return this.http.get<BandRole[]>('api/bandRole').toPromise()
  }
}
