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
  quantity: number = 1;
   //cart 
  cartItems: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private productService: ServiceService
  ) {}


  ngOnInit(): void {
    this.cartItems = this.productService.getCartItems();
  }


  increase() {
    this.quantity++;
  }

  decrease() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

    getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  removeItem(item: any) {
    this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== item.id);
  }
  
}

