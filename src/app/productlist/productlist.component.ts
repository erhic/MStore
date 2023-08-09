import { Component, OnInit } from '@angular/core';
import {  products } from '../product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent  {
//we are storing the data from the json file here to be looped in the template of theis component
  products = [...products]
  
}
