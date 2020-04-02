import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [];
  private uniqueId = 0;

  getUniqueId = () => ++this.uniqueId;

  constructor() { }

  addProduct(product: Product) {
    product.id = this.getUniqueId();
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }
}
