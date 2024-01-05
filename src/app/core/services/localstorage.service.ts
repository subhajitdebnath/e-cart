import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  setData(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getData(key: string): any {
    const strData = localStorage.getItem(key);
    if(strData) {
      return JSON.parse(strData);
    } else {
      return null;
    }
  }

  removeData(key: string): void {
    localStorage.removeItem(key);
  }
}
