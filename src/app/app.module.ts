import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';


const routes= [
  {path:'',component:ProductlistComponent},
  {path:'products/:productId',component:ProductDetailsComponent},
  {path:'carts',component:CartComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    TopBarComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule, RouterModule.forRoot(routes)
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
