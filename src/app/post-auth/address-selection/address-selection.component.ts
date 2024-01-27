import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
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
  editingIndex: number | null = null;

  addressObs!: Observable<any>;

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
    // this.addressService.addressChange.subscribe((addressList: Address[]) => {
    //   this.addressList = addressList;
    // });

    this.addressObs = this.addressService.addressChange;

  }

  add(): void {
    this.viewAdd = true;
  }

  close(): void {
    this.viewAdd = false;
    this.editingIndex = null;
    this.addressForm.reset();
  }
  onSubmit(form: FormGroup): void {
    if (form.invalid) {
        return;
    }

    const payload = {
        id: this.editingIndex !== null ? this.addressList[this.editingIndex].id : uuidv4(),
        name: form.value.name,
        pincode: form.value.pincode,
        locality: 'abc park',
        address: 'r c avenue',
        city: 'bangaluru',
        state: 'KA',
        type: form.value.type,
    };

    if (this.editingIndex !== null) {
        // Update existing address
        this.addressList[this.editingIndex] = payload;
    } else {
        // Add new address
        this.addressService.add(payload);
    }

    // this.changeAddress();
    this.close();
}

  edit(index: number): void {
    this.editingIndex = index;
    const editedAddress = this.addressList[index];
    this.addressForm.patchValue(editedAddress);
    this.viewAdd = true;
  }

  delete(addressId: string): void {
    this.addressService.delete(addressId);
  }
}
