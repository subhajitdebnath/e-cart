import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../constants/config';
import { API } from '../constants/api';
import { Observable } from 'rxjs';
import { ProductResponse } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<any> {
    return this.http.get(API_URL + API.products);
  }
}
