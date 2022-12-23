import { Product } from "./Products";

export class ProductCart {
  constructor(public product: Product, public quantity: number) {
    this.quantity = quantity;
  }
  quantityPlus() {
    this.quantity += 1;
  }
  quantityMinus(remove: number) {
    this.quantity -= remove;
  }
}
