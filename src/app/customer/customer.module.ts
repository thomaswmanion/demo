import { RouterModule } from '@angular/router';
import { CustomerService } from './customer.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerComponent } from './customer.component';
import { CustomerState } from './customer.state';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [CustomerComponent],
  providers: [
    CustomerState,
    CustomerService
  ]
})
export class CustomerModule { }
