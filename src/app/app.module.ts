import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';


const routes= [
  {path:'',component:ProductlistComponent},
  {path:'products/:productId',component:ProductDetailsComponent},
  {path:'carts',component:CartComponent},
  {path:'shipping',component:ShippingComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    TopBarComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,HttpClientModule, RouterModule.forRoot(routes),
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
