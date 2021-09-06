import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IContributer } from 'src/app/users/contributer/IContributer';

@Injectable({
  providedIn: 'root'
})
export class ContributerService {

  private url = 'http://localhost:1028/api';

  constructor(private http : HttpClient) { }

  getContributers() : Observable<any[]>
  {
    return this.http.get<any>(this.url+'/contributer');
  }

  getSingleContributer(id:number) : Observable<any[]>
  {
    return this.http.get<any>(this.url+'/contributer/'+id.toString());
  }

  getContByNameAndPw( name :string, password:string) : Observable<any[]>
  {
    return this.http.get<any>(this.url+'/contributer/'+name+'/'+password);
  }

  getContributerByName( email:string, password:string): Observable<IContributer>
  {
    return this.http.get<IContributer>('http://localhost:1028/api/contributer/' + email + '/' + password)
  }


}
