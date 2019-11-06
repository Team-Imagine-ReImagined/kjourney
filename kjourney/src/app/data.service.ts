import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  roles = this.http.get<Role[]>('/api/roles')

  constructor(private http: HttpClient) {
  }

  public getRoles(): Promise<Role[]> {
    return this.http.get<Role[]>('api/roles').toPromise()
  }
}
