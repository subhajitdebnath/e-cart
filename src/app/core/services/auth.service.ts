import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../constants/config';
import { API } from '../constants/api';
import { LocalstorageService } from './localstorage.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authSub = new BehaviorSubject(null);

  constructor(
    private http: HttpClient,
    private lsService: LocalstorageService
  ) { }

  isAuthenticated(): boolean {
    if(this.lsService.getData('authData')) {
      return true;
    } else {
      return false;
    }
  }

  getUser(): any {
    if(this.isAuthenticated()) {
      return this.lsService.getData('authData');
    } else {
      return null;
    }
  }

  logout(): void {
    this.lsService.removeData('authData');
    this.authSub.next(null);
  }

  login(body: any) {
    return this.http.post(API_URL + API.login, body);
  }

  register(body: any) {
    return this.http.post(API_URL + API.register, body);
  }
}
