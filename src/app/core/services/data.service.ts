import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private test = 5;

  counter$ = new Subject();

  constructor() { }

  changeCounter(): void {
    this.test += 1;
    this.counter$.next(this.test);
  }
}
