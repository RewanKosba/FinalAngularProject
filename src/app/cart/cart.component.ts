import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
   //cart 
  cartItems: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private productService: ServiceService
  ) {}


  ngOnInit(): void {
    this.cartItems = this.productService.getCartItems();
  }



  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  }
  
  increase(item: any) {
    item.quantity = (item.quantity || 1) + 1;
  }
  
  decrease(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }
  


  removeItem(item: any) {
    this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== item.id);
  }
  
}