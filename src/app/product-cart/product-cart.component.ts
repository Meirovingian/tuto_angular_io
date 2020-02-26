import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {

  itemSet = new Set();

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.itemSet = this.productService.getProducts(this.cartService.getFuncIdSet);
  }

  removeItemFromCart(funcId){
    this.itemSet = this.productService.getProducts(this.cartService.removeProductFromCart(funcId));
  }

}