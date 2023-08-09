import { Component, OnInit,Input } from '@angular/core';
import {  products ,  Product } from '../product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent  {
//we are storing the data from the json file here to be looped in the template of theis component
  products = [...products]
  
  // @Input() product=  Product |undefined

  //a function that is called by click of share button in template of this component
  share(){
window.alert('Product shared successfully' )
  }
}
