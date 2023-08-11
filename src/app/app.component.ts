import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service'; 
import { Product, productsData } from './products-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: Product[] = productsData; 

  constructor(private service: ProductsService) {}

  ngOnInit(){this.service.getProducts().subscribe(
    (x)=>{this.products = x;});}
}
