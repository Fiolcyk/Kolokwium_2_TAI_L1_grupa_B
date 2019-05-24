import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersDFComponent } from './orders-df/orders-df.component';
import { OrdersItemDFComponent } from './orders-item-df/orders-item-df.component';
import { OrdersDetailsDFComponent } from './orders-details-df/orders-details-df.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    OrdersDFComponent,
    OrdersItemDFComponent,
    OrdersDetailsDFComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
