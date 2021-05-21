import { Component, OnInit } from '@angular/core';
import { ProductDto } from '../../domain/api.types';

interface ShoppingCartItem extends ProductDto {
  amount: number;
  totalPrice: number;
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  items: ShoppingCartItem[] = [];
  total: number = 0;
  constructor() {}
  ngOnInit(): void {}
  addItem(item: ProductDto) {
    let existingIndex = this.items.findIndex((_item) => _item.id === item.id);
    if (existingIndex === -1) {
      this.items.push({ ...item, amount: 1, totalPrice: item.price });
    } else {
      this.increment(existingIndex);
    }
    this.calcTotal();
  }
  removeItem(i: number) {
    this.items.splice(i, 1);
    this.items = [...this.items];
    this.calcTotal();
  }
  decrement(i: number) {
    if (this.items[i].amount === 1) {
      return this.removeItem(i);
    }
    this.items[i].amount--;
    this.updatePrice(i);
  }
  increment(i: number) {
    this.items[i].amount++;
    this.updatePrice(i);
  }
  private calcTotal() {
    this.total = 0;
    this.items.forEach((item) => (this.total += item.amount * item.price));
  }
  private updatePrice(i: number) {
    this.items[i].totalPrice = this.items[i].price * this.items[i].amount;
    this.calcTotal();
  }
}
