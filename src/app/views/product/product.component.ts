import {Component, OnInit} from '@angular/core';
import {Product} from '../../domain/product.domain';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Array<Product> = [];

  constructor(private productsService: ProductService) {
  }

  ngOnInit() {
    this.productsService.get().subscribe((data) => {
      this.products = data;
    });
  }

}
