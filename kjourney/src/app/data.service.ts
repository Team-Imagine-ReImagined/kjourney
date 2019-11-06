import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Role } from '../models/role'
import { JobFamily } from 'src/models/jobFamily'
import { Band } from 'src/models/band'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {
  }

  public getRoles(): Promise<Role[]> {
    return this.http.get<Role[]>('api/roles').toPromise()
  }

  public getRoleDetails(id: number): Promise<Role> {
    return this.http.get<Role>('api/roles/' + id).toPromise()
  }

  public getJobFamily(id: number): Promise<JobFamily> {
    return this.http.get<JobFamily>('api/jobFamily/' + id).toPromise()
  }

  public getBand(id: number): Promise<Band> {
    return this.http.get<Band>('api/band/' + id).toPromise()
  }
}
