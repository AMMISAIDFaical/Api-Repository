import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {tap}from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url = "http://localhost:1028/api";

  constructor(private http : HttpClient) { }

  getOwners() : Observable<any[]>
  {
    return this.http.get<any>(this.url);
  }




}
