import { ThemeModule } from './../core/modules/theme/theme.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PurchasePhoneComponent } from './purchase-phone.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: PurchasePhoneComponent }
    ]),
    FormsModule,
    ReactiveFormsModule,
    ThemeModule
  ],
  declarations: [PurchasePhoneComponent]
})
export class PurchasePhoneModule { }
