import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productTypes = ['Mobile', 'Laptop', 'Desktop'];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  add(productForm: NgForm) {
    console.log(productForm);
    console.log(productForm.value);
    this.productService.addProduct(productForm.value);
    productForm.resetForm();
  }
}
