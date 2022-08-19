import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  constructor(
    private cartService: CartService
  ) { }

  /**
   * shippingCosts property that sets the shippingCosts property using the getShippingPrices() method from the CartService.
   * Initialize the shippingCosts property inside ngOnInit() method.
   */

  shippingCosts!: Observable<{ type: string, price: number }[]>;

  ngOnInit(): void {
    this.shippingCosts =  this.cartService.getShippingPrices();
  }

}
