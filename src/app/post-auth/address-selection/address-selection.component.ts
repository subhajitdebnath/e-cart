import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address } from 'src/app/core/models/address.model';
import { AddressService } from 'src/app/core/services/address.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-address-selection',
  templateUrl: './address-selection.component.html',
  styleUrls: ['./address-selection.component.scss']
})
export class AddressSelectionComponent {
  loader = false;
  addressList: Address[] = [];
  viewAdd = false;
  addressForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private addressService: AddressService,
  ) {}

  ngOnInit() {
    this.addressForm = this.fb.group({
      name: ['', Validators.required],
      pincode: ['', Validators.required],
      locality: [''],
      address: [''],
      city: [''],
      state: [''],
      type: ['', Validators.required],
    });

    this.getAddressChange();
  }

  getAddressChange(): void {
    this.addressService.addressChange.subscribe((addressList: Address[]) => {
      // console.log(addressList);
      this.addressList = addressList;
    })
  }

  add(): void {
    this.viewAdd = true;
  }

  close(): void {
    this.viewAdd = false;
    this.addressForm.reset();
  }

  onSubmit(form: FormGroup): void {
    console.log(form);

    if(form.invalid) {
      return;
    }

    const payload = {
      id: uuidv4(),
      name: form.value.name,
      pincode: form.value.pincode,
      locality: 'abc park',
      address: 'r c avenue',
      city: 'bangaluru',
      state: 'KA',
      type: form.value.type,
    };

    this.addressService.add(payload);
    this.close();
  }

  edit(): void {
    
  }

  delete(addressId: string): void {
    this.addressService.delete(addressId);
  }
}
