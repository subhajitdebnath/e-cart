import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../constants/config';
import { API } from '../constants/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(body: any) {
    return this.http.post(API_URL + API.login, body);
  }

  register(body: any) {
    return this.http.post(API_URL + API.register, body);
  }
}
