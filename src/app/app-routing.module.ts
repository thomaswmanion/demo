import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
  { path: 'customer', component: CustomerComponent },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'purchase-phone', loadChildren: './purchase-phone/purchase-phone.module#PurchasePhoneModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
