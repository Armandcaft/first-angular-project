import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  /**
   * Inject ActivatedRoute into the constructor() by adding private route: ActivatedRoute as an argument within the constructor's parentheses.
   * ActivatedRoute is specific to each component that the Angular Router loads. ActivatedRoute contains information about the route and the route's parameters. By injecting ActivatedRoute, you are configuring the component to use a service.
   * Inject the cart service by adding it to the constructor().
   */
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  /**
   * The addToCart() method does the following:
   * 1.Takes the current product as an argument
   * 2.Uses the CartService addToCart() method to add the product to the cart
   * 3.Displays a message that you've added a product to the cart
   */
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the chart!');
  }
}
