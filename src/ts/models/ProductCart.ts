import { Product } from "./Products";

export class ProductCart {
  constructor(public quantity: number, public product: Product) {
    this.quantity = quantity;
  }
  quantityPlus(add: number) {
    this.quantity += add;
  }
  quantityMinus(remove: number) {
    this.quantity -= remove;
  }
}
