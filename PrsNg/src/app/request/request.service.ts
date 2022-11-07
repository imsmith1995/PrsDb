import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemService } from '../common/system.service';
import { Request } from './request.class';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseurl: string = `${this.sys.baseurl}/requests`;

  constructor(
    private sys: SystemService,
    private http: HttpClient
  ) { }

  list(): Observable<Request[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Request[]>;
  }

  get(id: number): Observable<Request> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Request>;
  }

  create(prod: Request): Observable<Request> {
    return this.http.post(`${this.baseurl}`, prod) as Observable<Request>;
  }

  change(prod: Request): Observable<any> {
    return this.http.put(`${this.baseurl}/${prod.id}`, prod) as Observable<any>;
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
  }
}
