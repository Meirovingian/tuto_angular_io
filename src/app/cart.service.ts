import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  map = new Map();

  constructor() { }

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
    if(this.map !== null && this.map.size > 0){
      let sum = 0;
      for (let value of this.map.values()) {
        sum += value;
      }
      return sum;
    }
    return 0;
  }

  getFuncIdSet(){
    return this.map !== null && this.map.size > 0 ? this.map.keys() : undefined;
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
      value--;
      if(value > 0){
        this.map.set(funcId,value);
      }
      else{
        this.map.delete(funcId);
      }
    }
    return this.getFuncIdSet();
  }

}