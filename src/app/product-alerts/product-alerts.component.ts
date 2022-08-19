// import { Component, OnInit } from '@angular/core';
// To set up ProductAlertsComponent to receive product data, first import Input from @angular/core
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {

  @Input() product!: Product | undefined;
  // Configuring ProductAlertsComponent with an @Output() allows the ProductAlertsComponent to emit an event when the value of the notify property changes.
  @Output() notify = new EventEmitter();
}
