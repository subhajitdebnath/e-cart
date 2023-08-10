import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private test = 0;

  counter$ = new Subject();

  counter1$ = new BehaviorSubject(this.test);

  constructor() { }

  changeCounter(): void {
    this.test += 1;
    this.counter$.next(this.test);

    this.counter1$.next(this.test);
  }
}
