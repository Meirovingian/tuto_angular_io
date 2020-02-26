import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  map = new Map();

  constructor() { }

  addProductToCart(funcId) {
    console.log('Start of CartService addProductToCart ' + funcId);
    if(this.map == null){
      this.map = new Map();
    }
    let value = this.map.get(funcId);
    if(value == null){
      value = 0;
    }
    value++;
    this.map.set(funcId,value);
    console.log('Added : [' + funcId + ',' + this.map.get(funcId) + ']');
    console.log('End of CartService addProductToCart ' + funcId);
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
    console.log('Start of CartService getFuncIdSet()');
    console.log('TEST START');
    let testMap = new Map();
    testMap.set(104,2);
    testMap.set(108,5);
    testMap.set(105,4);
    if(testMap !== null && testMap.size > 0){
      for(let key of testMap.keys()){
        console.log('Test value : ' + key);
      }
    }
    console.log('TEST END');
    let funcIdSet = new Set();
    if(this.map !== null && this.map.size > 0){
      console.log('Map has ' + this.map.size + ' elements !');
      for(let entry of this.map.entries()){
        console.log('Key to add : ' + entry[0] + ', '+ entry[1]);
        funcIdSet.add(entry[0]);
      }
    }
    console.log(funcIdSet);
    console.log('End of CartService getFuncIdSet()');
    return funcIdSet;
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