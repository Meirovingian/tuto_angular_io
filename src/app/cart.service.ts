import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  map = new Map();

  constructor() { }

  addToCart(product) {
    this.items.push(product);
  }

  addProductToCart(funcId) {
    if(this.map == null){
      this.map = new Map();
    }
    let value = this.map.get(funcId);
    if(value === null){
      value = 0;
    }
    value++;
    this.map.set(funcId,value);
  }

  getNumberOfItems(){
    if(this.map !== null){
      let sum = 0;
      for (let value of this.map.values()) {
        sum += value;
      }
      return sum;
    }
    return 0;
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.map.clear();
    return this.map;
  }

  removeProductFromCart(funcId){
    if(this.map == null){
      this.map = new Map();
    }
    let value = this.map.get(funcId);
    if(value !== null && value > 0){

    }
  }

  removeItemFromCart(item) {
    this.items = this.items.filter(obj => obj !== item);
    return this.items;
  }

}