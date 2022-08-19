import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})

// In Angular, a service is an instance of a class that you can make available to any part of your application using Angular's dependency injection system.
export class CartService {

  // items property to store the array of the current products in the cart.
  items: Product[] = [];
  constructor(
    private http: HttpClient
  ) { }

  /**
   * The addToCart() method appends a product to an array of items
   * The getItems() method collects the items users add to the cart and returns each item with its associated quantity
   * The clearCart() method returns an empty array of items, which empties the cart
   */

  addToCart(product: Product) {
    return this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  /**
   * Using or retrieving shipping prices from src/assets/shipping.json using HttpClient
   * To get shipping data, from shipping.json, We can use the HttpClient get() method.
   * In cart.service.ts, below the clearCart() method, we define a new getShippingPrices() method that uses the HttpClient get() method.
   */
  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
