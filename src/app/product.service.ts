import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = [
  {
    funcId: 101,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    funcId: 102,
    name: 'Phone Mini',
    price: 7002,
    description: 'A great phone with one of the best cameras'
  },
  {
    funcId: 103,
    name: 'Phone Standard',
    price: 299,
    description: ''
  }];

  constructor() { }

  getProducts(funcIdSet){
    let productSet = new Set();
    if(funcIdSet !== null && funcIdSet.length > 0){
      for(let product of this.products){
        let productFuncId = product.funcId;
        if(productFuncId !== null && funcIdSet.has(productFuncId)){
          productSet.add(product);
        }
      }
    }
    return productSet;
  }

}