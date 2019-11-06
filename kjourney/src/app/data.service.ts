import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Role } from '../models/role';
import { Band } from '../models/band';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {
  }

  public getRoles(): Promise<Role[]> {
    return this.http.get<Role[]>('api/roles').toPromise()
  }
  public getBands(): Promise<Band[]> {
    return this.http.get<Band[]>('api/band').toPromise()
  }
}
