import { Component, OnInit } from '@angular/core';
import { products } from '../../model/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products = [...products];

  constructor() {}

  ngOnInit() {}

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('Answering from ProductList Event Nnotify');
  }
}
