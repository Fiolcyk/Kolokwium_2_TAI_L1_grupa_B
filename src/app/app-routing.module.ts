import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersDFComponent } from './orders-df/orders-df.component';
import { OrdersDetailsDFComponent } from './orders-details-df/orders-details-df.component';

const routes: Routes = [
  {path: '', component: OrdersDFComponent},
  {path: ':id',component: OrdersDetailsDFComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
