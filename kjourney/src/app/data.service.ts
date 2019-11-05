import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Role } from 'src/models/role';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  roles = this.http.get<Role[]>('/api/roles')

  constructor(private http: HttpClient) {
  }
}
