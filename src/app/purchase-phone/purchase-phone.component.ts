import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validator, Validators, FormControl } from '@angular/forms';

function validate(c: AbstractControl): any {
  const value: string = c.value;
  if (/\d\d\d-\d\d\d-\d\d\d\d/.test(value)) {
    return null;
  } else {
    return {
      phoneNumber: true
    };
  }
}

@Component({
  selector: 'app-purchase-phone',
  templateUrl: './purchase-phone.component.html',
  styleUrls: ['./purchase-phone.component.scss']
})
export class PurchasePhoneComponent implements OnInit {
  phoneForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.email],
    phoneNumber: ['', validate],
    address: ['']
  });

  constructor(
    public fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  save(phoneRequest: any) {
    console.log(phoneRequest);
  }

}

