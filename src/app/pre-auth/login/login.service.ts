import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();

  login(): void {
    // Perform login logic
    // Set user information
    this.isLoggedInSubject.next(true);
  }

  logout(): void {
    // Perform logout logic
    // Clear user information
    this.isLoggedInSubject.next(false);
  }
}
