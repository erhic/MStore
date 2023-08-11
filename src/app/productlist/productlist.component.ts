import { Component, OnInit,Input } from '@angular/core';
import {  products ,  Product } from '../product';
import Swal from 'sweetalert2';




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
    Swal.fire({text:'Product shared successfully' ,icon:'success'})
  }
  onNotify(){
    Swal.fire({text:'You will be notified when the product goes on sale.', icon:'info'})
  }
}
