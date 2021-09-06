import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {tap}from 'rxjs/operators';
import { IJoinContAndProd } from 'src/app/product-table/IJoinContAndProd';
import { IProduct } from 'src/app/product-table/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'http://localhost:1028/api';

  constructor(private http : HttpClient) { }

  getProducts() : Observable<IProduct[]>
  {
    return this.http.get<any>(this.url+'/products')
  }

  getContAndProd() : Observable<IJoinContAndProd[]>
  {
    return this.http.get<IJoinContAndProd[]>(this.url+'/productsJoinContributer')
  }

  addContAndProd(val : any)
  {
    return this.http.post(this.url+'/productsJoinContributer',val)
  }





}
