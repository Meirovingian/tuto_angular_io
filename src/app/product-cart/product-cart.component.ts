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
    console.log('Start of ProductCartComponent ngOnInit()');
    let funcIdSet = this.cartService.getFuncIdSet();
    console.log('Cart funcIdSet : ' + funcIdSet);
    this.itemSet = this.productService.getProducts(funcIdSet);
    console.log('FINAL ' + this.itemSet.size);
  }

  removeItemFromCart(funcId){
    this.itemSet = this.productService.getProducts(this.cartService.removeProductFromCart(funcId));
  }

}