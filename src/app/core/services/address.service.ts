import { Injectable } from '@angular/core';
import { Address } from '../models/address.model';
import { LocalstorageService } from './localstorage.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  addressList: Address[] = [];
  addressChange = new BehaviorSubject(this.addressList);

  constructor(
    private lsService: LocalstorageService
  ) {
    const address = this.lsService.getData('addressList');
    if(address) {
      this.addressList = address;
      this.changeAddress();
    }
  }

  add(address: Address) {
    this.addressList.push(address);
    this.changeAddress();
  }

  changeAddress(): void {
    this.lsService.setData('addressList', this.addressList);
    this.addressChange.next(this.addressList);
  }

  delete(addressId: string): void {
    this.addressList = this.addressList.filter(address => address.id !== addressId);
    this.changeAddress();
  }
}
